import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/service/auth.service';
import {CommonService} from '../../services/common.service';
import {ToastrService} from 'ngx-toastr';
import {UserDetailsModel} from '../../models/user-details.model';
import {take, takeUntil} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {loadMyInfo, selectMyInfoLoadingState, selectMyInfo, selectIsLoggedInState, loadIsLogin} from '../../store';
import {Observable} from 'rxjs';



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
  constructor(private authServices: AuthService,
              private commonService: CommonService,
              private toastrService: ToastrService,
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
}
