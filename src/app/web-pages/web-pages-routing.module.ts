import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '../core/guards/auth.guard';
import {
  ApproveAddMoneyComponent,
  HomepageComponent,
  LoginComponent, ProductSearchComponent,
  ProductViewComponent,
  ProfilePageComponent,
  RegisterPageComponent, RequestPublishSongComponent, UploadMusicPageComponent
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
        path: 'search/:productName', component: ProductSearchComponent
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
        path: 'uploadMusic', component: UploadMusicPageComponent,
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService]
      },
      {
        path: 'requestPublish', component: RequestPublishSongComponent,
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService]
      },
      {
        path: 'product/:productId/:poster', component: ProductViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPagesRoutingModule { }
