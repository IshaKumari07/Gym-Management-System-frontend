// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, map, catchError, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private signInUrl = 'http://localhost:9090/auth/signin';
 
//   constructor(private http: HttpClient) {}
 
//   signIn(credentials: { email: string; password: string }): Observable<string> {
//     return this.http.post<any>(this.signInUrl, credentials)
//       .pipe(
//         map(response => {
//           if (response && response.token) {
//             return response.token; // Returning only the token string
//           } else {
//             throw new Error('Invalid response from server');
//           }
//         }),
//         catchError(error => {
//           console.error('Sign-in failed:', error);
//           return throwError('Sign-in failed. Please try again.');
//         })
//       );
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { ReqRes } from '../models/reqres'; // Assuming you have a model for ReqRes
 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
 
  private signInUrl = 'http://localhost:9090';
 
  constructor(private http: HttpClient) { }
 
  signIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.signInUrl+"/auth/signin", credentials);
  }
  getCurrentUserEmail(): Observable<string> {
    
    return this.http.get<string>(this.signInUrl+'/public/email');

  }
}