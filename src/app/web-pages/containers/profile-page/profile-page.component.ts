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
  sendOtpAuth,
  updatePassword,
  updateProfile
} from '../../store';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {takeUntil} from 'rxjs/operators';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  constructor(private store: Store<WebPagesManagementState>,
              private fb: FormBuilder,
              ) { }
  userDetails$: Observable<UserDetailsModel>;
  isLoading$: Observable<boolean>;
  isVisible = false;
  isVisible2 = false;
  isConfirmLoading;
  fileList: NzUploadFile[] = [];
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
    } else {
      this.isVisible = false;
    }
  }

  handleCancel(num): void {
    if (num === 2) {
      this.isVisible2 = false;
    } else if (num === 1) {
      this.isVisible = false;
    } else {

    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      console.log(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(`${file.name} file upload failed.`);
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
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
}
