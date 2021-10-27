import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';
import {ToastrService} from 'ngx-toastr';
import * as webPagesActions from './web-pages.action';
import {exhaustMap, map} from 'rxjs/operators';

@Injectable()
export class WebPagesEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private toastrService: ToastrService,
    private commonService: CommonService,
  ) {
  }


  loadMyInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.loadMyInfo),
      exhaustMap((action: any) =>
        this.commonService.getMyInfo(action.body).pipe(
          map(response => {
            if (response?.success) {
              return webPagesActions.loadMyInfoSuccess({ response });
            } else {
              return webPagesActions.loadMyInfoFailed({ errors: response });
            }
          })
        ))
    )
  );

  checkDupUsername = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.checkDupUsername),
      exhaustMap((action: any) =>
        this.commonService.checkDuplicateUsername(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Username Valid');
              return webPagesActions.checkDupUsernameSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.checkDupUsernameFailed({ errors: response });
            }
          })
        )
      )
    )
  );

  requestRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(webPagesActions.requestRegister),
      exhaustMap((action: any) =>
        this.commonService.register(action.body).pipe(
          map(response => {
            if (response?.success) {
              this.toastrService.success('Success');
              this.router.navigate(['/login']);
              return webPagesActions.requestRegisterSuccess({ response });
            } else {
              this.toastrService.error(response.responseMessage.message, response.responseMessage.errorCode);
              return webPagesActions.requestRegisterFailed({ errors: response });
            }
          })
        )
      )
    )
  );
}
