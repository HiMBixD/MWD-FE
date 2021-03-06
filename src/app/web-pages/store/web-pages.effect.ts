import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';
import {ToastrService} from 'ngx-toastr';
import * as webPagesActions from './web-pages.action';
import {exhaustMap, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../web-pages.reducer';
import {
  getPlayListByUsername,
  loadMyInfo,
  searchRequestAddMoney,
  searchRequestPublishSong,
  searchRequestRegisterSinger,
  searchUserImage,
  searchUserMusic
} from './web-pages.action';

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

  requestBeSingerEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.requestBeSinger),
      exhaustMap((action: any) =>
        this.commonService.requestBeSinger(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Request Upgrade Role Singer Sent Success');
              return webPagesActions.requestBeSingerSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.requestBeSingerFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  requestPublishProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.requestPublishProduct),
      exhaustMap((action: any) =>
        this.commonService.requestPublishProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Request Publish New Song Sent Success');
              return webPagesActions.requestPublishProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.requestPublishProductFailed({ errors: response });
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

  searchRequestRegisterSingerEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchRequestRegisterSinger),
      exhaustMap((action: any) =>
        this.commonService.searchRequestRegisterSinger(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Request Add Money Success');
              return webPagesActions.searchRequestRegisterSingerSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchRequestRegisterSingerFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  handleRequestRegisterSingerEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.handleRequestRegisterSinger),
      exhaustMap((action: any) =>
        this.commonService.handleRequestRegisterSinger(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Handle Request Success');
              this.store.dispatch(searchRequestRegisterSinger({body: action.searchBody}));
              return webPagesActions.handleRequestRegisterSingerSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.handleRequestRegisterSingerFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  searchRequestPublishSongEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.searchRequestPublishSong),
      exhaustMap((action: any) =>
        this.commonService.searchRequestPublishProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Request Add Money Success');
              return webPagesActions.searchRequestPublishSongSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.searchRequestPublishSongFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  handleRequestPublishSongEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.handleRequestPublishSong),
      exhaustMap((action: any) =>
        this.commonService.handleRequestPublishProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Handle Request Success');
              this.store.dispatch(searchRequestPublishSong({body: action.searchBody}));
              return webPagesActions.handleRequestPublishSongSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.handleRequestPublishSongFailed({ errors: response });
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
              action.callback();
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

  // searchProductEff = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(webPagesActions.searchProduct),
  //     exhaustMap((action: any) =>
  //       this.commonService.searchProduct(action.body).pipe(
  //         map(response => {
  //           if (response?.success) {
  //             // this.toastrService.success('Set Avatar Success');
  //             // this.reloadUser();
  //             return webPagesActions.searchProductSuccess({ response });
  //           } else {
  //             this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
  //             return webPagesActions.searchProductFailed({ errors: response });
  //           }
  //         })
  //       )
  //     )
  //   )
  // );

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

  getPlayListByUsernameEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getPlayListByUsername),
      exhaustMap((action: any) =>
        this.commonService.getPlayListByUsername(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.getPlayListByUsernameSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getPlayListByUsernameFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getPlayListItemEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getPlayListItem),
      exhaustMap((action: any) =>
        this.commonService.getPlayListItem(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.getPlayListItemSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getPlayListItemFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getRecommendSongsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getRecommendSongs),
      exhaustMap((action: any) =>
        this.commonService.getRecommendSongs(action.body).pipe(
          map(response => {
            if (response?.success) {
              return webPagesActions.getRecommendSongsSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getRecommendSongsFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getProductInfoEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getProductInfo),
      exhaustMap((action: any) =>
        this.commonService.getProductInfo(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.getProductInfoSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getProductInfoFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getTopSellingEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getTopSelling),
      exhaustMap((action: any) =>
        this.commonService.getTopSelling(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.getTopSellingSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getTopSellingFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getTopSellingFromUserEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getTopSellingFromUser),
      exhaustMap((action: any) =>
        this.commonService.getTopSellingFromUser(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.getTopSellingFromUserSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getTopSellingFromUserFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  buyProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.buyProduct),
      exhaustMap((action: any) =>
        this.commonService.buyProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Buy Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              action.callback();
              return webPagesActions.buyProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.buyProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  markProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.markProduct),
      exhaustMap((action: any) =>
        this.commonService.markProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Mark Music Success');
              action.callback();
              return webPagesActions.markProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.markProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  addToPlayListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.addToPlayList),
      exhaustMap((action: any) =>
        this.commonService.addToPlayList(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Add Music To List Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              // action.callback();
              return webPagesActions.addToPlayListSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.addToPlayListFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  removeFromPlayListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.removeFromPlayList),
      exhaustMap((action: any) =>
        this.commonService.removeFromPlayList(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Remove Music from list Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              action.callback();
              return webPagesActions.removeFromPlayListSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.removeFromPlayListFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getIsOwnProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getIsOwnProduct),
      exhaustMap((action: any) =>
        this.commonService.getIsOwnProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              return webPagesActions.getIsOwnProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getIsOwnProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  getListOwnProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.getListOwnProduct),
      exhaustMap((action: any) =>
        this.commonService.getListOwnProduct(action.body).pipe(
          map(response => {
            if (response?.success) {
              return webPagesActions.getListOwnProductSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.getListOwnProductFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  loadAllCommentsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.loadAllComments),
      exhaustMap((action: any) =>
        this.commonService.loadAllComments(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.loadAllCommentsSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.loadAllCommentsFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  addViewedEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.addViewed),
      exhaustMap((action: any) =>
        this.commonService.addViewed(action.body).pipe(
          map(response => {
            if (response?.success) {
              // this.toastrService.success('Add Music Success');
              // this.reloadUser();
              // this.store.dispatch(searchUserMusic({body: action.searchBody}));
              return webPagesActions.addViewedSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.addViewedFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  addCommentEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.addComment),
      exhaustMap((action: any) =>
        this.commonService.addComment(action.body).pipe(
          map(response => {
            if (response?.success) {
              action.callback();
              return webPagesActions.addCommentSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.addCommentFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  deleteCommentEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.deleteComment),
      exhaustMap((action: any) =>
        this.commonService.deleteComment(action.body).pipe(
          map(response => {
            if (response?.success) {
              action.callback();
              return webPagesActions.deleteCommentSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.deleteCommentFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  createPlayListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.createPlayList),
      exhaustMap((action: any) =>
        this.commonService.createPlayList(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Create New List Success');
              // this.reloadUser();
              action.callback();
              this.store.dispatch(getPlayListByUsername({body: action.searchBody}));
              return webPagesActions.createPlayListSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.createPlayListFailed({ errors: response });
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
