import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages/web-pages.reducer';
import {loadIsLogin} from '../../web-pages/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private toastrService: ToastrService,
              private store: Store<WebPagesManagementState>,
              private router: Router) {}

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.unauUrl}/auth`, user)
      .pipe(
        tap(token => {
          localStorage.setItem(this.JWT_TOKEN, token.data);
          this.store.dispatch(loadIsLogin());
        }),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  // resetPass(payload): Observable<any> {
  //   return this.http.post(`${environment.url}/reset-password`, payload);
  // }

  logOut(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isLoggedIn() ? this.toastrService.error('Logout failed') : this.toastrService.success('Logout success');
    this.store.dispatch(loadIsLogin());
    this.router.navigate(['/home']);
  }

  navigateLogin(): void{
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken() && !this.jwtHelper.isTokenExpired(this.getJwtToken());
  }

  getJwtToken(): any {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  clearJwtToken(): any {
    return localStorage.removeItem(this.JWT_TOKEN);
  }
}
