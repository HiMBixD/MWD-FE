import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../../core/service/auth.service';
import {take, takeUntil} from 'rxjs/operators';
import {resetForgetPassword, selectMyInfoLoadingState, selectResetPassResult, sendOtpAuth, sendOtpUnAuth} from '../../store';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  isLoading$: Observable<boolean>;
  isLoading = false;
  isVisible = false;
  resetPasswordForm: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  countDown: Subscription;
  counter = 60;
  tick = 1000;
  unsub$ = new Subject();
  constructor(private fb: FormBuilder,
              // private translate: @ngx-translate/core
              private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService,
              private store: Store<WebPagesManagementState>,
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      otp: [null, [Validators.required, Validators.maxLength(6)]],
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.resetPasswordForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.resetPasswordForm.controls.checkPassword.updateValueAndValidity());
  }
  onLogin(loginForm: FormGroup): void {
    this.isLoading = true;
    this.authService.login(loginForm.value).pipe(take(1)).subscribe(value => {
      if (value) {
        if (value.success) {
          this.isLoading = false;
          this.toastrService.success('Login success');
          this.router.navigate(['/']);

        } else {
          this.isLoading = false;
          const message = 'User ' + value.responseMessage.message + ' ' + value.responseMessage.errorCode;
          this.toastrService.error(message);
        }
      }
    });
  }

  getOtp(): void {
    this.store.dispatch(sendOtpUnAuth({body: {username: this.resetPasswordForm.get('username').value}}));
    if (this.counter === 60 || this.counter === 0) {
      this.startCount();
    }
  }

  startCount(): void {
    this.counter = 60;
    this.countDown = timer(0, this.tick).pipe(takeUntil(this.unsub$)).subscribe(x => {
      --this.counter;
      if (this.counter < 1) {
        this.unsub$.next();
        this.unsub$.complete();
      }
    });
  }

  ngOnDestroy(): void {
    this.countDown = null;
    this.unsub$.next();
    this.unsub$.complete();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    const unsub2$ = new Subject();
    this.store.dispatch(resetForgetPassword({
      body: {
        username: this.resetPasswordForm.value.username,
        password: this.resetPasswordForm.value.password,
        otp: this.resetPasswordForm.value.otp
      }
    }));
    this.store.pipe(select(selectResetPassResult)).pipe(takeUntil(unsub2$)).subscribe(val => {
      if (val) {
        if (val === true) {
          this.isVisible = false;
        }
        unsub2$.next();
        unsub2$.complete();
      }
    });
  }
}
