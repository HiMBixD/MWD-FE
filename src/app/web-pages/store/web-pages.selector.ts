import {createSelector} from '@ngrx/store';
import {getWebPagesManagementState} from '../web-pages.selector';
import {WebPagesManagementState} from '../web-pages.reducer';

export const getWebPagesState = createSelector(
  getWebPagesManagementState,
  (actionManagementState: WebPagesManagementState) => actionManagementState.webPagesManagementState,
);

export const selectMyInfoLoadingState = createSelector(
  getWebPagesState,
  state => state.isLoading
);
export const selectListCommentsProduct = createSelector(
  getWebPagesState,
  state => state.listComments
);
export const selectIsLoggedInState = createSelector(
  getWebPagesState,
  state => state.isLogin
);

export const selectUsernameValid = createSelector(
  getWebPagesState,
  state => state.checkUsername
);

export const selectMyInfo = createSelector(
  getWebPagesState,
  state => state.userDetail
);

export const selectTopSelling = createSelector(
  getWebPagesState,
  state => state.topSelling
);

export const selectTopSellingOfUser = createSelector(
  getWebPagesState,
  state => state.topSellingOfUser
);

export const selectListOwnProduct = createSelector(
  getWebPagesState,
  state => state.listOwnProduct
);

export const selectActiveResult = createSelector(
  getWebPagesState,
  state => state.activeAccount
);

export const selectResetPassResult = createSelector(
  getWebPagesState,
  state => state.resetPass
);

export const selectRequestAddMoneyResult = createSelector(
  getWebPagesState,
  state => state.requestAddMoney
);
export const selectRequestAddMoneyList = createSelector(
  getWebPagesState,
  state => state.listRequestAddMoney
);

export const selectRequestPublishSongList = createSelector(
  getWebPagesState,
  state => state.listRequestPublishSong
);

export const selectRequestRegisterSingerList = createSelector(
  getWebPagesState,
  state => state.listRequestRegisterSinger
);

export const selectHandleAddMoneyRequestResult = createSelector(
  getWebPagesState,
  state => state.handleRequestAddMoneyResult
);

export const selectHandleRegisterSingerRequestResult = createSelector(
  getWebPagesState,
  state => state.handleRequestRegisterSingerResult
);

export const selectHandlePublishSongRequestResult = createSelector(
  getWebPagesState,
  state => state.handleRequestPublishSongResult
);

export const selectUserImageList = createSelector(
  getWebPagesState,
  state => state.listImages
);

export const selectUserMusicList = createSelector(
  getWebPagesState,
  state => state.listMusics
);

export const selectIsOwnProduct = createSelector(
  getWebPagesState,
  state => state.isOwnProduct
);

export const selectProductList = createSelector(
  getWebPagesState,
  state => state.listProduct
);

export const selectPlayListByUsername = createSelector(
  getWebPagesState,
  state => state.playListByUsername
);

export const selectPlayListItem = createSelector(
  getWebPagesState,
  state => state.playListItem
);

export const selectRecommendSongs = createSelector(
  getWebPagesState,
  state => state.recommendSongs
);

export const selectProductInfo = createSelector(
  getWebPagesState,
  state => state.productInfo
);
