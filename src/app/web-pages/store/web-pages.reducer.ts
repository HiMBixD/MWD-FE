import {Action, createReducer, on} from '@ngrx/store';
import * as webPagesActions from './web-pages.action';
import {UserDetailsModel} from '../models/user-details.model';
import {AuthService} from '../../core/service/auth.service';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {JwtHelperService} from '@auth0/angular-jwt';

export interface WebPagesState {
  userDetail: UserDetailsModel;
  errors: any | null;
  isLoading: boolean;
  isLogin: boolean;
  checkUsername: boolean;
  activeAccount: boolean;
  resetPass: boolean;
  requestAddMoney: boolean;
  isOwnProduct: boolean;
  listRequestAddMoney: any | null;
  listRequestPublishSong: any | null;
  listRequestRegisterSinger: any | null;
  listImages: any | null;
  listMusics: any | null;
  listProduct: any | null;
  recommendSongs: any | null;
  productInfo: any | null;
  listComments: any | null;
  listOwnProduct: any | null;
  playListByUsername: any | null;
  playListItem: any | null;
  topSellingOfUser: any | null;
  topSelling: any | null;
  handleRequestPublishSongResult: any | null;
  handleRequestRegisterSingerResult: any | null;
  handleRequestAddMoneyResult: any | null;
}

export const initialState: WebPagesState = {
  userDetail: null,
  errors: null,
  isLoading: false,
  isLogin: false,
  checkUsername: false,
  activeAccount: false,
  resetPass: false,
  requestAddMoney: false,
  isOwnProduct: false,
  listRequestAddMoney: null,
  listRequestPublishSong: null,
  listRequestRegisterSinger: null,
  listImages: null,
  listMusics: null,
  listProduct: null,
  listOwnProduct: null,
  recommendSongs: null,
  productInfo: null,
  listComments: null,
  playListByUsername: null,
  playListItem: null,
  topSellingOfUser: null,
  topSelling: null,
  handleRequestPublishSongResult: null,
  handleRequestRegisterSingerResult: null,
  handleRequestAddMoneyResult: null,
};

export const reducers = createReducer(
  initialState,

  on(webPagesActions.loadIsLogin, (state, {}) => ({
    ...state,
    isLogin: getIsLogin(),
  })),

  /***************** Load MyInfo ****************/
  on(webPagesActions.loadMyInfo, state => ({
    ...state,
    isLoading: true,
    userDetail: null,
    errors: null
  })),

  on(webPagesActions.loadMyInfoSuccess, (state, {response}) => ({
    ...state,
    isLoading: false,
    userDetail: response.data,
    errors: null
  })),

  on(webPagesActions.loadMyInfoFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: MyInfo ****************/

  /***************** Load Check Username ****************/
  on(webPagesActions.checkDupUsername, state => ({
    ...state,
    isLoading: true,
    checkUsername: false,
    errors: null
  })),

  on(webPagesActions.checkDupUsernameSuccess, (state, {response}) => ({
    ...state,
    checkUsername: response.success,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.checkDupUsernameFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: Check Username ****************/

  /***************** request register ****************/
  on(webPagesActions.requestRegister, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.requestRegisterSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.requestRegisterFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: request register ****************/

  /***************** send otp auth ****************/
  on(webPagesActions.sendOtpAuth, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.sendOtpAuthSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.sendOtpAuthFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: send otp auth ****************/

  /***************** send otp auth ****************/
  on(webPagesActions.sendOtpUnAuth, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.sendOtpUnAuthSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.sendOtpUnAuthFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: send otp auth ****************/

  /***************** activeAccount ****************/
  on(webPagesActions.activeAccount, state => ({
    ...state,
    isLoading: true,
    activeAccount: false,
    errors: null
  })),

  on(webPagesActions.activeAccountSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    activeAccount: true,
    isLoading: false
  })),

  on(webPagesActions.activeAccountFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: activeAccount ****************/

  /***************** updateProfile ****************/
  on(webPagesActions.updateProfile, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.updateProfileSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.updateProfileFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: updateProfile ****************/

  /***************** updatePassword ****************/
  on(webPagesActions.updatePassword, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.updatePasswordSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.updatePasswordFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: updatePassword ****************/

  /***************** resetForgetPassword ****************/
  on(webPagesActions.resetForgetPassword, state => ({
    ...state,
    isLoading: true,
    resetPass: false,
    errors: null
  })),

  on(webPagesActions.resetForgetPasswordSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    resetPass: true,
    isLoading: false
  })),

  on(webPagesActions.resetForgetPasswordFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: resetForgetPassword ****************/

  /***************** requestAddMoney ****************/
  on(webPagesActions.requestAddMoney, state => ({
    ...state,
    isLoading: true,
    requestAddMoney: false,
    errors: null
  })),

  on(webPagesActions.requestAddMoneySuccess, (state, {response}) => ({
    ...state,
    errors: null,
    requestAddMoney: true,
    isLoading: false
  })),

  on(webPagesActions.requestAddMoneyFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: requestAddMoney ****************/

  /***************** requestBeSinger ****************/
  on(webPagesActions.requestBeSinger, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.requestBeSingerSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.requestBeSingerFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: requestBeSinger ****************/

  /***************** requestPublishProduct ****************/
  on(webPagesActions.requestPublishProduct, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.requestPublishProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.requestPublishProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: requestPublishProduct ****************/

  /***************** searchRequestAddMoney ****************/
  on(webPagesActions.searchRequestAddMoney, state => ({
    ...state,
    isLoading: true,
    listRequestAddMoney: null,
    errors: null
  })),

  on(webPagesActions.searchRequestAddMoneySuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listRequestAddMoney: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchRequestAddMoneyFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchRequestAddMoney ****************/

  /***************** searchRequestRegisterSinger ****************/
  on(webPagesActions.searchRequestRegisterSinger, state => ({
    ...state,
    isLoading: true,
    listRequestRegisterSinger: null,
    errors: null
  })),

  on(webPagesActions.searchRequestRegisterSingerSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listRequestRegisterSinger: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchRequestRegisterSingerFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchRequestRegisterSinger ****************/

  /***************** searchRequestPublishSong ****************/
  on(webPagesActions.searchRequestPublishSong, state => ({
    ...state,
    isLoading: true,
    listRequestPublishSong: null,
    errors: null
  })),

  on(webPagesActions.searchRequestPublishSongSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listRequestPublishSong: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchRequestPublishSongFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchRequestPublishSong ****************/

  /***************** searchProduct ****************/
  on(webPagesActions.searchProduct, state => ({
    ...state,
    isLoading: true,
    listProduct: null,
    errors: null
  })),

  on(webPagesActions.searchProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listProduct: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchProduct ****************/

  /***************** handleRequestAddMoney ****************/
  on(webPagesActions.handleRequestAddMoney, state => ({
    ...state,
    isLoading: true,
    handleRequestAddMoneyResult: null,
    errors: null
  })),

  on(webPagesActions.handleRequestAddMoneySuccess, (state, {response}) => ({
    ...state,
    errors: null,
    handleRequestAddMoneyResult: response,
    isLoading: false
  })),

  on(webPagesActions.handleRequestAddMoneyFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: handleRequestAddMoney ****************/

  /***************** handleRequestRegisterSinger ****************/
  on(webPagesActions.handleRequestRegisterSinger, state => ({
    ...state,
    isLoading: true,
    handleRequestRegisterSingerResult: null,
    errors: null
  })),

  on(webPagesActions.handleRequestRegisterSingerSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    handleRequestRegisterSingerResult: response,
    isLoading: false
  })),

  on(webPagesActions.handleRequestRegisterSingerFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: handleRequestRegisterSinger ****************/

  /***************** handleRequestPublishSong ****************/
  on(webPagesActions.handleRequestPublishSong, state => ({
    ...state,
    isLoading: true,
    handleRequestPublishSongResult: null,
    errors: null
  })),

  on(webPagesActions.handleRequestPublishSongSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    handleRequestPublishSongResult: response,
    isLoading: false
  })),

  on(webPagesActions.handleRequestPublishSongFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: handleRequestPublishSong ****************/

  /***************** setUserAvatar ****************/
  on(webPagesActions.setUserAvatar, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.setUserAvatarSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.setUserAvatarFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: setUserAvatar ****************/

  /***************** addProduct ****************/
  on(webPagesActions.addProduct, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.addProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.addProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: addProduct ****************/

  /***************** searchUserImage ****************/
  on(webPagesActions.searchUserImage, state => ({
    ...state,
    isLoading: true,
    listImages: null,
    errors: null
  })),

  on(webPagesActions.searchUserImageSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listImages: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchUserImageFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchUserImage ****************/

  /***************** searchUserMusic ****************/
  on(webPagesActions.searchUserMusic, state => ({
    ...state,
    isLoading: true,
    listMusics: null,
    errors: null
  })),

  on(webPagesActions.searchUserMusicSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listMusics: response.data,
    isLoading: false
  })),

  on(webPagesActions.searchUserMusicFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: searchUserMusic ****************/

  /***************** getPlayListByUsername ****************/
  on(webPagesActions.getPlayListByUsername, state => ({
    ...state,
    isLoading: true,
    playListByUsername: null,
    errors: null
  })),

  on(webPagesActions.getPlayListByUsernameSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    playListByUsername: response.data,
    isLoading: false
  })),

  on(webPagesActions.getPlayListByUsernameFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getPlayListByUsername ****************/

  /***************** getPlayListItem ****************/
  on(webPagesActions.getPlayListItem, state => ({
    ...state,
    isLoading: true,
    playListItem: null,
    errors: null
  })),

  on(webPagesActions.getPlayListItemSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    playListItem: response.data,
    isLoading: false
  })),

  on(webPagesActions.getPlayListItemFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getPlayListItem ****************/

  /***************** getRecommendSongs ****************/
  on(webPagesActions.getRecommendSongs, state => ({
    ...state,
    isLoading: true,
    recommendSongs: null,
    errors: null
  })),

  on(webPagesActions.getRecommendSongsSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    recommendSongs: response.data,
    isLoading: false
  })),

  on(webPagesActions.getRecommendSongsFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getRecommendSongs ****************/

  /***************** getTopSelling ****************/
  on(webPagesActions.getTopSelling, state => ({
    ...state,
    isLoading: true,
    topSelling: null,
    errors: null
  })),

  on(webPagesActions.getTopSellingSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    topSelling: response.data,
    isLoading: false
  })),

  on(webPagesActions.getTopSellingFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getTopSelling ****************/

  /***************** getTopSellingFromUser ****************/
  on(webPagesActions.getTopSellingFromUser, state => ({
    ...state,
    isLoading: true,
    topSellingOfUser: null,
    errors: null
  })),

  on(webPagesActions.getTopSellingFromUserSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    topSellingOfUser: response.data,
    isLoading: false
  })),

  on(webPagesActions.getTopSellingFromUserFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getTopSellingFromUser ****************/

  /***************** getProductInfo ****************/
  on(webPagesActions.getProductInfo, state => ({
    ...state,
    isLoading: true,
    productInfo: null,
    errors: null
  })),

  on(webPagesActions.getProductInfoSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    productInfo: response.data,
    isLoading: false
  })),

  on(webPagesActions.getProductInfoFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getRecommendSongs ****************/

  /***************** getIsOwnProduct ****************/
  on(webPagesActions.getIsOwnProduct, state => ({
    ...state,
    isLoading: true,
    isOwnProduct: false,
    errors: null
  })),

  on(webPagesActions.getIsOwnProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isOwnProduct: response.data,
    isLoading: false
  })),

  on(webPagesActions.getIsOwnProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getIsOwnProduct ****************/

  /***************** getListOwnProduct ****************/
  on(webPagesActions.getListOwnProduct, state => ({
    ...state,
    isLoading: true,
    listOwnProduct: false,
    errors: null
  })),

  on(webPagesActions.getListOwnProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listOwnProduct: response.data,
    isLoading: false
  })),

  on(webPagesActions.getListOwnProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: getListOwnProduct ****************/

  /***************** buyProduct ****************/
  on(webPagesActions.buyProduct, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.buyProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.buyProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: buyProduct ****************/

  /***************** markProduct ****************/
  on(webPagesActions.markProduct, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.markProductSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.markProductFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: markProduct ****************/

  /***************** addToPlayList ****************/
  on(webPagesActions.addToPlayList, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.addToPlayListSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.addToPlayListFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: addToPlayList ****************/

  /***************** removeFromPlayList ****************/
  on(webPagesActions.removeFromPlayList, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.removeFromPlayListSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.removeFromPlayListFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: removeFromPlayList ****************/

  /***************** loadAllComments ****************/
  on(webPagesActions.loadAllComments, state => ({
    ...state,
    isLoading: true,
    listComments: null,
    errors: null
  })),

  on(webPagesActions.loadAllCommentsSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    listComments: response.data,
    isLoading: false
  })),

  on(webPagesActions.loadAllCommentsFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: loadAllComments ****************/

  /***************** addComment ****************/
  on(webPagesActions.addComment, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.addCommentSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.addCommentFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: addComment ****************/

  /***************** deleteComment ****************/
  on(webPagesActions.deleteComment, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.deleteCommentSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.deleteCommentFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: deleteCommentdeleteComment ****************/

  /***************** createPlayList ****************/
  on(webPagesActions.createPlayList, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.createPlayListSuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.createPlayListFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: createPlayList ****************/
);

function getIsLogin(): any {
  const jwtHelper = new JwtHelperService();
  const jwt =  localStorage.getItem('JWT_TOKEN');
  return !!jwt && !jwtHelper.isTokenExpired(jwt);
}
//
// function updateAction(actionList, response) {
//   const index = actionList.findIndex(item => item.name === response.name);
//   if (index !== -1) {
//     actionList.splice(index, 1, response);
//   }
//   return actionList;
// }

export function webPagesReducers(state: WebPagesState | undefined, action: Action): any {
  return reducers(state, action);
}
