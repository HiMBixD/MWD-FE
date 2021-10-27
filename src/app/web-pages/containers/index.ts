import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ApproveAddMoneyComponent} from './admin-pages/approve-add-money/approve-add-money.component';


export const containers: any[] = [
  HomepageComponent,
  LoginComponent,
  RegisterPageComponent,
  ProfilePageComponent,
  ApproveAddMoneyComponent
];

export * from './homepage/homepage.component';
export * from './profile-page/profile-page.component';
export * from './register-page/register-page.component';
export * from './login/login.component';
export * from './admin-pages/approve-add-money/approve-add-money.component';
