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
  listRequestAddMoney: any | null;
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
  listRequestAddMoney: null,
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

  /***************** handleRequestAddMoney ****************/
  on(webPagesActions.handleRequestAddMoney, state => ({
    ...state,
    isLoading: true,
    errors: null
  })),

  on(webPagesActions.handleRequestAddMoneySuccess, (state, {response}) => ({
    ...state,
    errors: null,
    isLoading: false
  })),

  on(webPagesActions.handleRequestAddMoneyFailed, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
  /***************** End: handleRequestAddMoney ****************/
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
