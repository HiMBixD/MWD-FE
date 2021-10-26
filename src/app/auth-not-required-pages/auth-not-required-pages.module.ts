import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthNotRequiredPagesRoutingModule } from './auth-not-required-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  imports: [
    CommonModule,
    AuthNotRequiredPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthNotRequiredPagesModule { }
