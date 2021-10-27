import {createFeatureSelector} from '@ngrx/store';
import {WebPagesManagementState} from './web-pages.reducer';

export const getWebPagesManagementState = createFeatureSelector<WebPagesManagementState>('webPagesManage');
