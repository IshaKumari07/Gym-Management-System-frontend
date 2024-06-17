import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membership } from '../models/membership';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private baseUrl = 'http://localhost:9090'; // Change this to your backend API URL
  token=this.authService.getToken();
  constructor(private http: HttpClient,private authService:AuthService) { }

  getAllMemberships(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.baseUrl}/adminuser/mem`,{headers:this.createAuthorizationHeader()});
  }

  addMembership(membership: Membership): Observable<Membership> {
    return this.http.post<Membership>(`${this.baseUrl}/admin/mem`, membership,{headers:this.createAuthorizationHeader()});
  }

  updateMembership(membership: Membership): Observable<Membership> {
    return this.http.put<Membership>(`${this.baseUrl}/admin/mem`, membership,{headers:this.createAuthorizationHeader()});
  }

  deleteMembership(membershipId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin/mem/${membershipId}`,{headers:this.createAuthorizationHeader()});
  }

  private createAuthorizationHeader() {
    

    return new HttpHeaders().set(
    "Authorization", "Bearer " + this.token
    )
  
}
}

