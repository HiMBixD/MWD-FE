import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
  }

  /////////////////////////////////////////////// unsecure ///////////////////////////////////////////////////////

  checkDuplicateUsername(data): Observable<any> {
    return this.http.post(`${environment.unauUrl}/checkDupUsername`, data);
  }

  register(data): Observable<any> {
    return this.http.post(`${environment.unauUrl}/register`, data);
  }

  sendOtpUnau(data): Observable<any> {
    return this.http.post(`${environment.unauUrl}/sendOtp`, data);
  }

  changePassword(data): Observable<any> {
    return this.http.post(`${environment.unauUrl}/changePassword`, data);
  }

  /////////////////////////////////////////////// unsecure ///////////////////////////////////////////////////////

  sendOtpAuth(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/sendOtp`, data);
  }

  getMyInfo(body): Observable<any> {
    const payload: any = {
      body
    };
    return this.http.post(`${environment.apiUrl}/user/getMyInfo`, payload);
  }

  activeAccount(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/active`, data);
  }

  updateProfile(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/updateProfile`, data);
  }

  updatePassword(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/changePassword`, data);
  }

  requestAddMoney(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/requestAddMoney`, data);
  }

  searchRequestAddMoney(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/findRequestAddMoney`, data);
  }

  handleRequestAddMoney(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/approveAddMoney`, data);
  }

  // uploadFile(body: { file: File, submissionId: any }): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', body.file);
  //   formData.append('submissionId', body.submissionId);
  //   return this.http
  //     .post(`${environment.apiUrl}/file/upload`, formData, {
  //       reportProgress: true,
  //       observe: 'events',
  //     });
  // }
  // searchUser(body: {username: string}): Observable<any> {
  // }
}


