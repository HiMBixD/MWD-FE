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
