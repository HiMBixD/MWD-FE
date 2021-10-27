import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {checkDupUsername, requestRegister, selectUsernameValid} from '../../store';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  currentCheckUsername;
  unsub$ = new Subject();
  isUsernameValid$: Observable<boolean>;
  countDown: Subscription;
  counter = 60;
  tick = 1000;
  constructor(private fb: FormBuilder,
              private toastrService: ToastrService,
              private store: Store<WebPagesManagementState>
              ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      fullName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      username: [null, [Validators.required, Validators.maxLength(50)]],
      // otp: [null, [Validators.required, Validators.maxLength(6)]],
      agree: [false],
    });
    this.isUsernameValid$ = this.store.pipe(select(selectUsernameValid));

  }

  submitForm(): void {
    const { value, valid, invalid, touched , valueChanges} = this.registerForm;
    if (invalid) {
      for (const i in this.registerForm.controls) {
        if (this.registerForm.controls.hasOwnProperty(i)) {
          this.registerForm.controls[i].markAsDirty();
          this.registerForm.controls[i].updateValueAndValidity();
        }
      }
    } else {
      this.store.dispatch(requestRegister({
        body: {
          username: value.username,
          password: value.password,
          email: value.email,
          phone: value.phoneNumber,
          fullName: value.fullName
        }
      }));
    }

  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.registerForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }
  checkDupUsername(username: any): void {
    this.currentCheckUsername = username;
    this.store.dispatch(checkDupUsername({body: {
      username
      }}));
    this.store.pipe(select(selectUsernameValid));
  }

  isChangeUsername(): boolean {
    return this.currentCheckUsername !== this.registerForm.get('username').value;
  }
  // getOtp() {
  //   console.log('getotp');
  //   this.startCount();
  // }

  startCount(): void {
    this.countDown = timer(0, this.tick).pipe(takeUntil(this.unsub$)).subscribe(() => --this.counter);
  }

  ngOnDestroy(): void {
    this.countDown = null;
    this.unsub$.next();
    this.unsub$.complete();
  }
}
