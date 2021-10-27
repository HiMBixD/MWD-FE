import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../../core/service/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  isLoading = false;

  resetPasswordForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              // private translate: @ngx-translate/core
              private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
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

  // requestNewPass(cancelButton): void {
  //   this.isLoading = true;
  //   const unsub$ = new Subject();
  //   this.authService.resetPass(this.resetPasswordForm.value).pipe(takeUntil(unsub$)).subscribe(val => {
  //     if (val?.success) {
  //       cancelButton.click();
  //       this.toastrService.success('Send request success', 'Please check your Email for more details');
  //     } else {
  //       const message = val.responseMessage.message + ' ' + val.responseMessage.errorCode;
  //       this.toastrService.error('Error: ' + message, 'Request reset password');
  //     }
  //     this.isLoading = false;
  //   });
  // }
}
