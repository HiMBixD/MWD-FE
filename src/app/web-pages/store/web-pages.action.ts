import {createAction, props} from '@ngrx/store';

/**************  Load isLogged in ***************/

export const loadIsLogin = createAction(
  '[Home Page] Load isLogged in',
);

/**************  End: Load isLogged in ***************/

/**************  Load MyInfo ***************/

export const loadMyInfo = createAction(
  '[Home Page] Load MyInfo',
);

export const loadMyInfoSuccess = createAction(
  '[Home API] Load MyInfo Success',
  props<{ response: any }>()
);

export const loadMyInfoFailed = createAction(
  '[Home API] Load MyInfo Failed',
  props<{ errors: any }>()
);
/**************  End: Load MyInfo ***************/

/**************  Check Username ***************/
export const checkDupUsername = createAction(
  '[Home Page] Load Check Username',
  props<{ body: any }>()
);

export const checkDupUsernameSuccess = createAction(
  '[Home API] Load Check Username Success',
  props<{ response: any }>()
);

export const checkDupUsernameFailed = createAction(
  '[Home API] Load Check Username Failed',
  props<{ errors: any }>()
);
/**************  End: Load Check Username ***************/

/**************  register ***************/
export const requestRegister = createAction(
  '[Home Page] requestRegister',
  props<{ body: any }>()
);

export const requestRegisterSuccess = createAction(
  '[Home API] requestRegister Success',
  props<{ response: any }>()
);

export const requestRegisterFailed = createAction(
  '[Home API] requestRegister Failed',
  props<{ errors: any }>()
);
/**************  End: register ***************/

/**************  send otp need auth ***************/
export const sendOtpAuth = createAction(
  '[Home Page] sendOtpAuth',
);

export const sendOtpAuthSuccess = createAction(
  '[Home API] sendOtpAuth Success',
  props<{ response: any }>()
);

export const sendOtpAuthFailed = createAction(
  '[Home API] sendOtpAuth Failed',
  props<{ errors: any }>()
);
/**************  End: sendOtpAuth ***************/

/**************  send otp no auth ***************/
export const sendOtpUnAuth = createAction(
  '[Home Page] sendOtpUnAuth',
  props<{ body: any }>()
);

export const sendOtpUnAuthSuccess = createAction(
  '[Home API] sendOtpUnAuth Success',
  props<{ response: any }>()
);

export const sendOtpUnAuthFailed = createAction(
  '[Home API] sendOtpUnAuth Failed',
  props<{ errors: any }>()
);
/**************  End: sendOtpUnAuth ***************/

/**************  active account ***************/
export const activeAccount = createAction(
  '[Home Page] activeAccount',
  props<{ body: any }>()
);

export const activeAccountSuccess = createAction(
  '[Home API] activeAccount Success',
  props<{ response: any }>()
);

export const activeAccountFailed = createAction(
  '[Home API] activeAccount Failed',
  props<{ errors: any }>()
);
/**************  End: active account ***************/

/**************  updateProfile ***************/
export const updateProfile = createAction(
  '[Home Page] updateProfile',
  props<{ body: any }>()
);

export const updateProfileSuccess = createAction(
  '[Home API] updateProfile Success',
  props<{ response: any }>()
);

export const updateProfileFailed = createAction(
  '[Home API] updateProfile Failed',
  props<{ errors: any }>()
);
/**************  End: updateProfile ***************/

/**************  updatePassword ***************/
export const updatePassword = createAction(
  '[Home Page] updatePassword',
  props<{ body: any }>()
);

export const updatePasswordSuccess = createAction(
  '[Home API] updatePassword Success',
  props<{ response: any }>()
);

export const updatePasswordFailed = createAction(
  '[Home API] updatePassword Failed',
  props<{ errors: any }>()
);
/**************  End: updatePassword ***************/

/**************  resetForgetPassword ***************/
export const resetForgetPassword = createAction(
  '[Home Page] resetForgetPassword',
  props<{ body: any }>()
);

export const resetForgetPasswordSuccess = createAction(
  '[Home API] resetForgetPassword Success',
  props<{ response: any }>()
);

export const resetForgetPasswordFailed = createAction(
  '[Home API] resetForgetPassword Failed',
  props<{ errors: any }>()
);
/**************  End: resetForgetPassword ***************/

/**************  requestAddMoney ***************/
export const requestAddMoney = createAction(
  '[Home Page] requestAddMoney',
  props<{ body: any }>()
);

export const requestAddMoneySuccess = createAction(
  '[Home API] requestAddMoney Success',
  props<{ response: any }>()
);

export const requestAddMoneyFailed = createAction(
  '[Home API] requestAddMoney Failed',
  props<{ errors: any }>()
);
/**************  End: requestAddMoney ***************/

/**************  requestBeSinger ***************/
export const requestBeSinger = createAction(
  '[Home Page] requestBeSinger',
  props<{ body: any }>()
);

export const requestBeSingerSuccess = createAction(
  '[Home API] requestBeSinger Success',
  props<{ response: any }>()
);

export const requestBeSingerFailed = createAction(
  '[Home API] requestBeSinger Failed',
  props<{ errors: any }>()
);
/**************  End: requestBeSinger ***************/

/**************  requestPublishProduct ***************/
export const requestPublishProduct = createAction(
  '[Home Page] requestPublishProduct',
  props<{ body: any }>()
);

export const requestPublishProductSuccess = createAction(
  '[Home API] requestPublishProduct Success',
  props<{ response: any }>()
);

export const requestPublishProductFailed = createAction(
  '[Home API] requestPublishProduct Failed',
  props<{ errors: any }>()
);
/**************  End: requestPublishProduct ***************/

/**************  searchRequestAddMoney ***************/
export const searchRequestAddMoney = createAction(
  '[Home Page] searchRequestAddMoney',
  props<{ body: any }>()
);

export const searchRequestAddMoneySuccess = createAction(
  '[Home API] searchRequestAddMoney Success',
  props<{ response: any }>()
);

export const searchRequestAddMoneyFailed = createAction(
  '[Home API] searchRequestAddMoney Failed',
  props<{ errors: any }>()
);
/**************  End: searchRequestAddMoney ***************/

/**************  searchRequestRegisterSinger ***************/
export const searchRequestRegisterSinger = createAction(
  '[Home Page] searchRequestRegisterSinger',
  props<{ body: any }>()
);

export const searchRequestRegisterSingerSuccess = createAction(
  '[Home API] searchRequestRegisterSinger Success',
  props<{ response: any }>()
);

export const searchRequestRegisterSingerFailed = createAction(
  '[Home API] searchRequestRegisterSinger Failed',
  props<{ errors: any }>()
);
/**************  End: searchRequestRegisterSinger ***************/

/**************  searchRequestPublishSong ***************/
export const searchRequestPublishSong = createAction(
  '[Home Page] searchRequestPublishSong',
  props<{ body: any }>()
);

export const searchRequestPublishSongSuccess = createAction(
  '[Home API] searchRequestPublishSong Success',
  props<{ response: any }>()
);

export const searchRequestPublishSongFailed = createAction(
  '[Home API] searchRequestPublishSong Failed',
  props<{ errors: any }>()
);
/**************  End: searchRequestPublishSong ***************/

/************** handleRequestAddMoney ***************/
export const handleRequestAddMoney = createAction(
  '[Home Page] handleRequestAddMoney',
  props<{ body: any; searchBody: any  }>()
);

export const handleRequestAddMoneySuccess = createAction(
  '[Home API] handleRequestAddMoney Success',
  props<{ response: any }>()
);

export const handleRequestAddMoneyFailed = createAction(
  '[Home API] handleRequestAddMoney Failed',
  props<{ errors: any }>()
);
/**************  End: handleRequestAddMoney ***************/

/************** handleRequestRegisterSinger ***************/
export const handleRequestRegisterSinger = createAction(
  '[Home Page] handleRequestRegisterSinger',
  props<{ body: any; searchBody: any  }>()
);

export const handleRequestRegisterSingerSuccess = createAction(
  '[Home API] handleRequestRegisterSinger Success',
  props<{ response: any }>()
);

export const handleRequestRegisterSingerFailed = createAction(
  '[Home API] handleRequestRegisterSinger Failed',
  props<{ errors: any }>()
);
/**************  End: handleRequestRegisterSinger ***************/

/************** handleRequestPublishSong ***************/
export const handleRequestPublishSong = createAction(
  '[Home Page] handleRequestPublishSong',
  props<{ body: any; searchBody: any  }>()
);

export const handleRequestPublishSongSuccess = createAction(
  '[Home API] handleRequestPublishSong Success',
  props<{ response: any }>()
);

export const handleRequestPublishSongFailed = createAction(
  '[Home API] handleRequestPublishSong Failed',
  props<{ errors: any }>()
);
/**************  End: handleRequestPublishSong ***************/

/************** setUserAvatar ***************/
export const setUserAvatar = createAction(
  '[Home Page] setUserAvatar',
  props<{ body: any; callback: any}>()
);

export const setUserAvatarSuccess = createAction(
  '[Home API] setUserAvatar Success',
  props<{ response: any }>()
);

export const setUserAvatarFailed = createAction(
  '[Home API] setUserAvatar Failed',
  props<{ errors: any }>()
);
/**************  End: setUserAvatar ***************/

/************** searchUserImage ***************/
export const searchUserImage = createAction('[Home Page] searchUserImage', props<{ body: any; }>());

export const searchUserImageSuccess = createAction('[Home API] searchUserImage Success', props<{ response: any }>());

export const searchUserImageFailed = createAction('[Home API] searchUserImage Failed', props<{ errors: any }>());
/**************  End: searchUserImage ***************/


/************** deleteFileImage ***************/
export const deleteFileImage = createAction('[Home Page] deleteFileImage', props<{ body: any; searchBody: any; }>());

export const deleteFileImageSuccess = createAction('[Home API] deleteFileImage Success', props<{ response: any }>());

export const deleteFileImageFailed = createAction('[Home API] deleteFileImage Failed', props<{ errors: any }>());
/**************  End: deleteFileImage ***************/

/************** searchUserMusic ***************/
export const searchUserMusic = createAction('[Home Page] searchUserMusic', props<{ body: any; }>());

export const searchUserMusicSuccess = createAction('[Home API] searchUserMusic Success', props<{ response: any }>());

export const searchUserMusicFailed = createAction('[Home API] searchUserMusic Failed', props<{ errors: any }>());
/**************  End: searchUserMusic ***************/

// /************** searchProduct ***************/
// export const searchProduct = createAction('[Home Page] searchProduct', props<{ body: any; }>());
//
// export const searchProductSuccess = createAction('[Home API] searchProduct Success', props<{ response: any }>());
//
// export const searchProductFailed = createAction('[Home API] searchProduct Failed', props<{ errors: any }>());
// /**************  End: searchProduct ***************/


/************** deleteFileMusic ***************/
export const deleteFileMusic = createAction('[Home Page] deleteFileMusic', props<{ body: any; searchBody: any; }>());

export const deleteFileMusicSuccess = createAction('[Home API] deleteFileMusic Success', props<{ response: any }>());

export const deleteFileMusicFailed = createAction('[Home API] deleteFileMusic Failed', props<{ errors: any }>());
/**************  End: deleteFileMusic ***************/

/************** addProduct ***************/
export const addProduct = createAction('[Home Page] addProduct', props<{ body: any; }>());

export const addProductSuccess = createAction('[Home API] addProduct Success', props<{ response: any }>());

export const addProductFailed = createAction('[Home API] addProduct Failed', props<{ errors: any }>());
/**************  End: addProduct ***************/

/************** searchProduct ***************/
export const searchProduct = createAction('[Home Page] searchProduct', props<{ body: any; }>());

export const searchProductSuccess = createAction('[Home API] searchProduct Success', props<{ response: any }>());

export const searchProductFailed = createAction('[Home API] searchProduct Failed', props<{ errors: any }>());
/**************  End: searchProduct ***************/

/************** createPlayList ***************/
export const createPlayList = createAction('[Home Page] createPlayList', props<{ body: any; searchBody: any; callback: any }>());

export const createPlayListSuccess = createAction('[Home API] createPlayList Success', props<{ response: any }>());

export const createPlayListFailed = createAction('[Home API] createPlayList Failed', props<{ errors: any }>());
/**************  End: createPlayList ***************/

/************** getPlayListByUsername ***************/
export const getPlayListByUsername = createAction('[Home Page] getPlayListByUsername', props<{ body: any; }>());

export const getPlayListByUsernameSuccess = createAction('[Home API] getPlayListByUsername Success', props<{ response: any }>());

export const getPlayListByUsernameFailed = createAction('[Home API] getPlayListByUsername Failed', props<{ errors: any }>());
/**************  End: getPlayListByUsername ***************/

/************** getPlayListItem ***************/
export const getPlayListItem = createAction('[Home Page] getPlayListItem', props<{ body: any; }>());

export const getPlayListItemSuccess = createAction('[Home API] getPlayListItem Success', props<{ response: any }>());

export const getPlayListItemFailed = createAction('[Home API] getPlayListItem Failed', props<{ errors: any }>());
/**************  End: getPlayListItem ***************/

/************** addToPlayList ***************/
export const addToPlayList = createAction('[Home Page] addToPlayList', props<{ body: any; }>());

export const addToPlayListSuccess = createAction('[Home API] addToPlayList Success', props<{ response: any }>());

export const addToPlayListFailed = createAction('[Home API] addToPlayList Failed', props<{ errors: any }>());
/**************  End: addToPlayList ***************/

/************** removeFromPlayList ***************/
export const removeFromPlayList = createAction('[Home Page] removeFromPlayList', props<{ body: any; callback }>());

export const removeFromPlayListSuccess = createAction('[Home API] removeFromPlayList Success', props<{ response: any }>());

export const removeFromPlayListFailed = createAction('[Home API] removeFromPlayList Failed', props<{ errors: any }>());
/**************  End: removeFromPlayList ***************/

/************** getRecommendSongs ***************/
export const getRecommendSongs = createAction('[Home Page] getRecommendSongs');

export const getRecommendSongsSuccess = createAction('[Home API] getRecommendSongs Success', props<{ response: any }>());

export const getRecommendSongsFailed = createAction('[Home API] getRecommendSongs Failed', props<{ errors: any }>());
/**************  End: getRecommendSongs ***************/

/************** getProductInfo ***************/
export const getProductInfo = createAction('[Home Page] getProductInfo', props<{ body: any; }>());

export const getProductInfoSuccess = createAction('[Home API] getProductInfo Success', props<{ response: any }>());

export const getProductInfoFailed = createAction('[Home API] getProductInfo Failed', props<{ errors: any }>());
/**************  End: getProductInfo ***************/

/************** getTopSelling ***************/
export const getTopSelling = createAction('[Home Page] getTopSelling', props<{ body: any; }>());

export const getTopSellingSuccess = createAction('[Home API] getTopSelling Success', props<{ response: any }>());

export const getTopSellingFailed = createAction('[Home API] getTopSelling Failed', props<{ errors: any }>());
/**************  End: getTopSelling ***************/

/************** getTopSellingFromUser ***************/
export const getTopSellingFromUser = createAction('[Home Page] getTopSellingFromUser', props<{ body: any; }>());

export const getTopSellingFromUserSuccess = createAction('[Home API] getTopSellingFromUser Success', props<{ response: any }>());

export const getTopSellingFromUserFailed = createAction('[Home API] getTopSellingFromUser Failed', props<{ errors: any }>());
/**************  End: getTopSellingFromUser ***************/

/************** buyProduct ***************/
export const buyProduct = createAction('[Home Page] buyProduct', props<{ body: any; callback }>());

export const buyProductSuccess = createAction('[Home API] buyProduct Success', props<{ response: any }>());

export const buyProductFailed = createAction('[Home API] buyProduct Failed', props<{ errors: any }>());
/**************  End: buyProduct ***************/

/************** markProduct ***************/
export const markProduct = createAction('[Home Page] markProduct', props<{ body: any; callback }>());

export const markProductSuccess = createAction('[Home API] markProduct Success', props<{ response: any }>());

export const markProductFailed = createAction('[Home API] markProduct Failed', props<{ errors: any }>());
/**************  End: markProduct ***************/

/************** getIsOwnProduct ***************/
export const getIsOwnProduct = createAction('[Home Page] getIsOwnProduct', props<{ body: any; }>());

export const getIsOwnProductSuccess = createAction('[Home API] getIsOwnProduct Success', props<{ response: any }>());

export const getIsOwnProductFailed = createAction('[Home API] getIsOwnProduct Failed', props<{ errors: any }>());
/**************  End: getIsOwnProduct ***************/

/************** getListOwnProduct ***************/
export const getListOwnProduct = createAction('[Home Page] getListOwnProduct', props<{ body: any; }>());

export const getListOwnProductSuccess = createAction('[Home API] getListOwnProduct Success', props<{ response: any }>());

export const getListOwnProductFailed = createAction('[Home API] getListOwnProduct Failed', props<{ errors: any }>());
/**************  End: getListOwnProduct ***************/

/************** loadAllComments ***************/
export const loadAllComments = createAction('[Home Page] loadAllComments', props<{ body: any; }>());

export const loadAllCommentsSuccess = createAction('[Home API] loadAllComments Success', props<{ response: any }>());

export const loadAllCommentsFailed = createAction('[Home API] loadAllComments Failed', props<{ errors: any }>());
/**************  End: loadAllComments ***************/

/************** addViewed ***************/
export const addViewed = createAction('[Home Page] addViewed', props<{ body: any; }>());

export const addViewedSuccess = createAction('[Home API] addViewed Success', props<{ response: any }>());

export const addViewedFailed = createAction('[Home API] addViewed Failed', props<{ errors: any }>());
/**************  End: addViewed ***************/

/************** addComment ***************/
export const addComment = createAction('[Home Page] addComment', props<{ body: any; callback; }>());

export const addCommentSuccess = createAction('[Home API] addComment Success', props<{ response: any }>());

export const addCommentFailed = createAction('[Home API] addComment Failed', props<{ errors: any }>());
/**************  End: addComment ***************/

/************** deleteComment ***************/
export const deleteComment = createAction('[Home Page] deleteComment', props<{ body: any; callback; }>());

export const deleteCommentSuccess = createAction('[Home API] deleteComment Success', props<{ response: any }>());

export const deleteCommentFailed = createAction('[Home API] deleteComment Failed', props<{ errors: any }>());
/**************  End: deleteComment ***************/
// export const loadMyInfo = createAction(
//   '[Home Page] Load MyInfo',
//   props<{ body: any }>()
// );
//
// export const loadMyInfoSuccess = createAction(
//   '[Home API] Load MyInfo Success',
//   props<{ response: any }>()
// );
//
// export const loadMyInfoFailed = createAction(
//   '[Home API] Load MyInfo Failed',
//   props<{ errors: any }>()
// );
// /**************  End: Load MyInfo ***************/
