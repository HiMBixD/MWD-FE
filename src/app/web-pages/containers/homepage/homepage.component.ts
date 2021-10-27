import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/service/auth.service';
import {CommonService} from '../../services/common.service';
import {ToastrService} from 'ngx-toastr';
import {UserDetailsModel} from '../../models/user-details.model';
import {take, takeUntil} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {
  loadMyInfo,
  selectMyInfoLoadingState,
  selectMyInfo,
  selectIsLoggedInState,
  loadIsLogin,
  requestAddMoney,
  selectRequestAddMoneyResult
} from '../../store';
import {Observable, Subject} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isLogin$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  userDetails$: Observable<UserDetailsModel>;
  isLogin;
  rechargeMoneyModal = false;
  rechargeForm: FormGroup = this.fb.group({
    information: [null, [Validators.required]],
    amount: [null, [Validators.required, Validators.maxLength(20)]]
  });
  constructor(private authServices: AuthService,
              private commonService: CommonService,
              private toastrService: ToastrService,
              private fb: FormBuilder,
              private store: Store<WebPagesManagementState>
  ) { }
  isCollapsed = false;
  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
    this.store.dispatch(loadIsLogin());
    this.isLogin$ = this.store.pipe(select(selectIsLoggedInState));
    this.isLogin$.subscribe(isLogin => {
      this.isLogin = isLogin;
      if (isLogin) {
        this.store.dispatch(loadMyInfo());
        this.userDetails$ = this.store.pipe(select(selectMyInfo));
      }
    });

    //
    // this.commonService.getFaculties().subscribe(
    //   f => {
    //     if (f?.success) {
    //       this.facultyList = f.data;
    //     }
    //   }
    // );
  }
  testMess(): void {
    this.toastrService.success('Hello world!', 'Toastr fun!');
  }
  getLoginStatus(): boolean {
    return this.authServices.isLoggedIn();
  }

  onLogOut(): void {
    this.authServices.logOut();
  }

  navigateLogin(): void {
    this.authServices.navigateLogin();
  }

  handleCancel(): void {
    this.rechargeMoneyModal = false;
  }

  handleOk(): void {
    const unsub2$ = new Subject();
    this.store.dispatch(requestAddMoney({body: this.rechargeForm.value}));
    this.store.pipe(select(selectRequestAddMoneyResult)).pipe(takeUntil(unsub2$)).subscribe(val => {
      if (val) {
        if (val === true) {
          this.rechargeMoneyModal = false;
          this.rechargeForm.reset();
        }
        unsub2$.next();
        unsub2$.complete();
      }
    });
  }
}
