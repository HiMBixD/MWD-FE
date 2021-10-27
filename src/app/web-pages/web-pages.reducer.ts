import {ActionReducerMap} from '@ngrx/store';
import {webPagesReducers, WebPagesState} from './store';

export interface WebPagesManagementState {
  webPagesManagementState: WebPagesState;
}

export const webPagesManagementReducers: ActionReducerMap<WebPagesManagementState> = {
  webPagesManagementState: webPagesReducers,
};
