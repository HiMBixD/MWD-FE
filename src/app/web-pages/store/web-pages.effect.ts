import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';
import {ToastrService} from 'ngx-toastr';
import * as webPagesActions from './web-pages.action';
import {exhaustMap, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../web-pages.reducer';
import {loadMyInfo, searchRequestAddMoney, searchUserImage, searchUserMusic} from './web-pages.action';

@Injectable()
export class WebPagesEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private toastrService: ToastrService,
    private commonService: CommonService,
    private store: Store<WebPagesManagementState>,
  ) {
  }

  loadMyInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.loadMyInfo),
      exhaustMap((action: any) =>
        this.commonService.getMyInfo(action.body).pipe(
          map(response => {
            if (response?.success) {
              return webPagesActions.loadMyInfoSuccess({ response });
            } else {
              return webPagesActions.loadMyInfoFailed({ errors: response });
            }
          })
        ))
    )
  );

  checkDupUsername = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.checkDupUsername),
      exhaustMap((action: any) =>
        this.commonService.checkDuplicateUsername(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Username Valid');
              return webPagesActions.checkDupUsernameSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.checkDupUsernameFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  requestRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.requestRegister),
      exhaustMap((action: any) =>
        this.commonService.register(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              this.router.navigate(['/login']);
              return webPagesActions.requestRegisterSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.requestRegisterFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  sendOtpAuth = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.sendOtpAuth),
      exhaustMap((action: any) =>
        this.commonService.sendOtpAuth(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              return webPagesActions.sendOtpAuthSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.sendOtpAuthFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  sendOtpUnAuth = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.sendOtpUnAuth),
      exhaustMap((action: any) =>
        this.commonService.sendOtpUnau(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              return webPagesActions.sendOtpUnAuthSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.sendOtpUnAuthFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  activeAccount = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.activeAccount),
      exhaustMap((action: any) =>
        this.commonService.activeAccount(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              this.reloadUser();
              return webPagesActions.activeAccountSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.activeAccountFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  updateProfile = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.updateProfile),
      exhaustMap((action: any) =>
        this.commonService.updateProfile(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              this.reloadUser();
              return webPagesActions.updateProfileSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.updateProfileFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  updatePassword = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.updatePassword),
      exhaustMap((action: any) =>
        this.commonService.updatePassword(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              return webPagesActions.updatePasswordSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.updatePasswordFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  resetForgetPassword = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.resetForgetPassword),
      exhaustMap((action: any) =>
        this.commonService.changePassword(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              return webPagesActions.resetForgetPasswordSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.resetForgetPasswordFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  requestAddMoney = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.requestAddMoney),
      exhaustMap((action: any) =>
        this.commonService.requestAddMoney(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Request Add Money Success');
              return webPagesActions.requestAddMoneySuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.requestAddMoneyFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  searchRequestAddMoney = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchRequestAddMoney),
      exhaustMap((action: any) =>
        this.commonService.searchRequestAddMoney(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Request Add Money Success');
              return webPagesActions.searchRequestAddMoneySuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchRequestAddMoneyFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  handleRequestAddMoney = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.handleRequestAddMoney),
      exhaustMap((action: any) =>
        this.commonService.handleRequestAddMoney(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Handle Request Success');
              this.store.dispatch(searchRequestAddMoney({body: action.searchBody}));
              return webPagesActions.handleRequestAddMoneySuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.handleRequestAddMoneyFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  setUserAvatar = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.setUserAvatar),
      exhaustMap((action: any) =>
        this.commonService.setUserAvatar(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Set Avatar Success');
              this.reloadUser();
              return webPagesActions.setUserAvatarSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.setUserAvatarFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  searchUserImageEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchUserImage),
      exhaustMap((action: any) =>
        this.commonService.searchUserImage(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Set Avatar Success');
              // this.reloadUser();
              return webPagesActions.searchUserImageSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchUserImageFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  deleteFileImage = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.deleteFileImage),
      exhaustMap((action: any) =>
        this.commonService.deleteFileImage(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Delete Image Success');
              // this.reloadUser();
              this.store.dispatch(searchUserImage({body: action.searchBody}));
              return webPagesActions.deleteFileImageSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.deleteFileImageFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  searchUserMusicEff = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchUserMusic),
      exhaustMap((action: any) =>
        this.commonService.searchUserMusic(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Set Avatar Success');
              // this.reloadUser();
              return webPagesActions.searchUserMusicSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchUserMusicFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  searchProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchProduct),
      exhaustMap((action: any) =>
        this.commonService.searchProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.searchProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  deleteFileMusic = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.deleteFileMusic),
      exhaustMap((action: any) =>
        this.commonService.deleteFileMusic(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Delete File Music Success');
              // this.reloadUser();
              this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.deleteFileMusicSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.deleteFileMusicFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  addProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.addProduct),
      exhaustMap((action: any) =>
        this.commonService.addProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.addProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.addProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  reloadUser(): void {
    this.store.dispatch(loadMyInfo());
  }
}
