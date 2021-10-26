import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthRequiredPagesRoutingModule } from './auth-required-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  imports: [
    CommonModule,
    AuthRequiredPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthRequiredPagesModule { }
