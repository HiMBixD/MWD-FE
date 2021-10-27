import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {CoreRoutingModule} from './core-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
