import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:9090'
  token=this.authService.getToken();
  constructor(private http: HttpClient,private authService:AuthService) { }

  addMember(member: Member): Observable<string> {
    return this.http.post<string>(this.apiUrl+"/user/addMember", member,{headers:this.createAuthorizationHeader()});
  }
  
  private createAuthorizationHeader() {
    return new HttpHeaders().set(
    "Authorization", "Bearer " + this.token
    )
  
}
}
