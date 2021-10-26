import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '../core/guards/auth.guard';
import {HomepageComponent} from './containers';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      // {
      //   path: '404', component: Error404Component
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthNotRequiredPagesRoutingModule { }
