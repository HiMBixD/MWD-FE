import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ApproveAddMoneyComponent} from './admin-pages/approve-add-money/approve-add-money.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductSearchComponent} from './product-search/product-search.component';
import {UploadMusicPageComponent} from './upload-music-page/upload-music-page.component';
import {RequestPublishSongComponent} from './singer-pages/request-publish-song/request-publish-song.component';
import {ApproveRegisterSingerComponent} from './admin-pages/approve-register-singer/approve-register-singer.component';
import {ApprovePublishSongComponent} from './admin-pages/approve-publish-song/approve-publish-song.component';
import {UpgradeSingerRoleComponent} from './upgrade-singer-role/upgrade-singer-role.component';
import {PlayListComponent} from './play-list/play-list.component';
import {PageNoPermissionComponent} from './page-no-permission/page-no-permission.component';


export const containers: any[] = [
  HomepageComponent,
  LoginComponent,
  RegisterPageComponent,
  ProfilePageComponent,
  ProductSearchComponent,
  ProductViewComponent,
  ApproveAddMoneyComponent,
  ApproveRegisterSingerComponent,
  ApprovePublishSongComponent,
  UpgradeSingerRoleComponent,
  PlayListComponent,
  RequestPublishSongComponent,
  UploadMusicPageComponent,
  PageNoPermissionComponent
];

export * from './page-no-permission/page-no-permission.component';
export * from './play-list/play-list.component';
export * from './upgrade-singer-role/upgrade-singer-role.component';
export * from './admin-pages/approve-register-singer/approve-register-singer.component';
export * from './admin-pages/approve-publish-song/approve-publish-song.component';
export * from './homepage/homepage.component';
export * from './profile-page/profile-page.component';
export * from './register-page/register-page.component';
export * from './login/login.component';
export * from './admin-pages/approve-add-money/approve-add-money.component';
export * from './product-view/product-view.component';
export * from './product-search/product-search.component';
export * from './upload-music-page/upload-music-page.component';
export * from './singer-pages/request-publish-song/request-publish-song.component';
