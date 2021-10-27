import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '../core/guards/auth.guard';
import {ApproveAddMoneyComponent, HomepageComponent, LoginComponent, ProfilePageComponent, RegisterPageComponent} from './containers';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterPageComponent
      },
      {
        path: 'profile', component: ProfilePageComponent,
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService]
      },
      {
        path: 'approveAddMoney', component: ApproveAddMoneyComponent,
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPagesRoutingModule { }
