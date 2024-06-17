// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ReqRes } from '../models/ReqRes';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private signUpUrl = 'http://localhost:9090/auth/signup'; // Adjust the URL as per your backend endpoint
 
//   constructor(private http: HttpClient) { }
 
//   signUp(signUpRequest: ReqRes): Observable<ReqRes> {
//     return this.http.post<ReqRes>(this.signUpUrl, signUpRequest);
//   }
// }
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private signUpUrl = 'http://localhost:9090/auth/signup';
 
  constructor(private http: HttpClient) { }
 
  signUp(signUpData: any): Observable<any> {
    return this.http.post(this.signUpUrl, signUpData);
  }
}