import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
  }

  /////////////////////////////////////////////// unsecure ///////////////////////////////////////////////////////

  checkDuplicateUsername(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/checkDupUsername`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  register(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/register`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  sendOtpUnau(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/sendOtp`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  changePassword(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/changePassword`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /////////////////////////////////////////////// unsecure ///////////////////////////////////////////////////////

  sendOtpAuth(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/sendOtp`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getMyInfo(body): Observable<any> {
    const payload: any = {
      body
    };
    return this.http
      .post(`${environment.apiUrl}/user/getMyInfo`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  activeAccount(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/active`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  updateProfile(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/updateProfile`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  updatePassword(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/changePassword`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  requestAddMoney(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/requestAddMoney`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  searchRequestAddMoney(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/findRequestAddMoney`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  setUserAvatar(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/setUserAvatar`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  handleRequestAddMoney(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/admin/approveAddMoney`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  uploadFile(body: { file: File, description: any, fileType: any, fileName: any, typeUpload: string}): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', body.file);
    formData.append('description', body.description);
    formData.append('fileName', body.fileName);
    formData.append('fileType', body.fileType);
    return this.http
      .post(`${environment.apiUrl}/` + body.typeUpload, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }
}


