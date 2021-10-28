import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {
  activeAccount,
  selectActiveResult,
  selectMyInfo,
  selectMyInfoLoadingState,
  sendOtpAuth, setUserAvatar,
  updatePassword,
  updateProfile
} from '../../store';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {takeUntil} from 'rxjs/operators';
import {CommonService} from '../../services/common.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  constructor(private store: Store<WebPagesManagementState>,
              private fb: FormBuilder,
              private commonService: CommonService
              ) { }
  userDetails$: Observable<UserDetailsModel>;
  isLoading$: Observable<boolean>;
  isVisible = false;
  isVisible2 = false;
  isConfirmLoading;
  fileList: File[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  otpForm: FormGroup = this.fb.group({
    otp: [null, [Validators.required, Validators.maxLength(6)]],
  });

  updateProfileForm: FormGroup = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    fullName: [null, [Validators.required]],
    phone: [null, [Validators.required]],
  });
  fileProgress = 0;

  changePassForm: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  countDown: Subscription;
  counter = 60;
  tick = 1000;
  unsub$ = new Subject();
  showUpdateProfile = false;
  showUpdatePass = false;
  currentUserDetail: UserDetailsModel;
  ngOnInit(): void {
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.userDetails$.pipe(takeUntil(this.unsub$)).subscribe(val => this.currentUserDetail = val);
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
    this.changePassForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }
  showModal(num): void {
    if (num === 1) {
      this.isVisible = true;
      this.fileList.pop();
    } else if (num === 2) {
      this.isVisible2 = true;
    } else {

    }
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.changePassForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.changePassForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  handleOk(val): void {
    if (val === 'active') {
      this.store.dispatch(activeAccount({
        body: {
          otp: this.otpForm.value.otp
        }
      }));
      const unsub2$ = new Subject();
      this.store.pipe(select(selectActiveResult)).pipe(takeUntil(unsub2$)).subscribe(value => {
        if (value) {
          if (value === true) {
            this.isVisible2 = false;
          }
          unsub2$.next();
          unsub2$.complete();
        }
      });
    } else  if (val === 'upload'){
      this.fileProgress = 0;
      this.commonService.uploadFile({
        file: this.fileList[0],
        description: 'avatar user',
        fileType: this.fileList[0].type,
        fileName: this.fileList[0].name,
        typeUpload: 'uploadImg'
      })
        .subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.fileProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              if (!event?.body?.success) {
                this.fileProgress = -2;
              } else {
                const mess = 'Do you want to replace avatar with this one? You still can change later by using change avatar functions nearby';
                if (confirm(mess)) {
                  const avatarUrl = `${environment.unauUrl}/imgs/` + event.body.data;
                  this.store.dispatch(setUserAvatar({body: {
                      string: avatarUrl
                    }}));
                }
                this.fileProgress = -1;
                this.isVisible = false;
                this.fileList.pop();
              }
            }
          },
          err => {
            this.fileProgress = -2;
          }
        );
      // this.isVisible = false;
      // this.fileList.pop();
      // this.fileProgress = 0;
    }
  }

  handleCancel(num): void {
    if (num === 2) {
      this.isVisible2 = false;
    } else if (num === 1) {
      this.isVisible = false;
      this.fileList.pop();
      this.fileProgress = -1;
    } else {

    }
  }


  onSelect(event): void {
    console.log(event);
    this.fileProgress = -1;
    this.fileList.pop();
    this.fileList.push(...event.addedFiles);
  }

  onRemove(event): void  {
    console.log(event);
    this.fileList.splice(this.fileList.indexOf(event), 1);
  }

  getOtp(): void {
    this.store.dispatch(sendOtpAuth());
    this.startCount();
  }


  startCount(): void {
    this.countDown = timer(0, this.tick).pipe(takeUntil(this.unsub$)).subscribe(x => {
      --this.counter;
      if (this.counter < 1) {
        this.unsub$.next();
        this.unsub$.complete();
      }
    });
  }

  updateProfile(): void {
    this.store.dispatch(updateProfile({body: this.updateProfileForm.value}));
  }

  ngOnDestroy(): void {
    this.countDown = null;
    this.unsub$.next();
    this.unsub$.complete();
  }

  openUpdateProfile(userDetailsModel: UserDetailsModel): void {
    this.showUpdateProfile = true;
    this.showUpdatePass = false;
    this.updateProfileForm.patchValue(userDetailsModel);
  }

  updatePassword(): void {
    this.store.dispatch(updatePassword({body: {
        oldPass: this.changePassForm.value.oldPassword,
        newPass: this.changePassForm.value.password
      }}));
  }

  getStatusProgressBar(): any {
    return this.fileProgress === -2 ? 'exception' :
      this.fileProgress > -1 ? 'active' :
        this.fileProgress >= 100 ? null : 'exception';
  }
}
