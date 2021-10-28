import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '../core/guards/auth.guard';
import {
  ApproveAddMoneyComponent,
  HomepageComponent,
  LoginComponent, ProductSearchComponent,
  ProductViewComponent,
  ProfilePageComponent,
  RegisterPageComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '', component: ProductSearchComponent
      },
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
      {
        path: 'product/:productId', component: ProductViewComponent,
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
