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
}

export const initialState: WebPagesState = {
  userDetail: null,
  errors: null,
  isLoading: false,
  isLogin: false,
  checkUsername: false,
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
