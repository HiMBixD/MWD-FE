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
