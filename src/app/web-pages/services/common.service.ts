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

  requestBeSinger(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/requestBeSinger`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  requestPublishProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/requestPublishProduct`, data)
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

  searchRequestRegisterSinger(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/findRequestBeSinger`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  searchRequestPublishProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/findRequestPublishProduct`, data)
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

  searchUserImage(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/getImagesByUser`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  deleteFileImage(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/removeFileImg`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  searchUserMusic(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/getListMusicByUser`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  deleteFileMusic(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/removeFileMusic`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  addProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/addProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  searchProduct(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/searchProduct`, data)
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

  handleRequestRegisterSinger(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/admin/approveRegisterSinger`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  handleRequestPublishProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/admin/approvePublishProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getPlayListByUsername(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/getAllPlayListsByUsername`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getPlayListItem(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/getPlayListItem`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getIsOwnProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/isOwnProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getListOwnProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/getListOwnProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getProductInfo(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/getProductInfo`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getTopSellingFromUser(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/getTopSellingFromUser`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getTopSelling(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/getTopSelling`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  addViewed(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/addViewed`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  loadAllComments(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/loadAllComments`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  addComment(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/addComment`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  deleteComment(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/deleteComment`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  createPlayList(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/createPlayList`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  addToPlayList(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/addToPlayList`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  removeFromPlayList(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/removeFromPlayList`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  buyProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/buyProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  markProduct(data): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/user/markProduct`, data)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  getRecommendSongs(data): Observable<any> {
    return this.http
      .post(`${environment.unauUrl}/getRecommendSongs`, data)
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
      .post(`${environment.apiUrl}/user/` + body.typeUpload, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }
}


