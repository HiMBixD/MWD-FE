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
