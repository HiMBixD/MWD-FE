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
    return this.http.post(`${environment.unauUrl}/register`, data);
  }

  changePassword(data): Observable<any> {
    return this.http.post(`${environment.unauUrl}/change-password`, data);
  }

  /////////////////////////////////////////////// unsecure ///////////////////////////////////////////////////////


  getMyInfo(body): Observable<any> {
    const payload: any = {
      body
    };
    return this.http.post(`${environment.apiUrl}/user/getMyInfo`, payload);
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

  /**
   * Update user's own account info.
   * @param info
   * @returns
   */
  updateInfo(info: {
    username: string,
    firstName: string,
    lastName: string,
    phone: string
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/update-my-info`, info);
  }

  // get other user's info
  getUserInfo(userInfo: {
    username: string
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/get-user-info`, userInfo);
  }

  /**
   * Get user by username.
   * @param userName user's username, string.
   */
  getUser(userName: { username: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/search-users`, userName);
  }

  getFaculties(): Observable<any> {
    const temp = {};
    return this.http.post(`${environment.apiUrl}/get-Faculties`, temp);
  }

  /**
   * Get Files by Submission Id
   * @param: body
   */
  getFilesBySub(submission: { submissionId: number }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/file/get-files`, submission);
  }

  /**
   * Get all user roles
   * @returns
   */
  getAllRoles(): Observable<any> {
    const temp = {};
    return this.http.post(`${environment.apiUrl}/get-Roles`, temp);
  }

  addNewUser(user: {
    username: string,
    password?: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    roleId: number,
    facultyId?: number
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/create-user`, user);
  }

  /**
   * Admin: Update user
   * @param user
   * @returns
   */
  updateUser(user: {
    username: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    roleId: number,
    facultyId: number
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/update-user-info`, user);
  }

}


