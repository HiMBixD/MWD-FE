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
  props<{ body: any; }>()
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
