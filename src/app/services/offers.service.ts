import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private baseUrl = 'http://localhost:9090'; // Change this to your backend API URL
  token=this.authService.getToken();
  constructor(private http: HttpClient,private authService:AuthService) { }

  getAllOffers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/adminuser/off`,{headers:this.createAuthorizationHeader()});
  }

  addOffer(offer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/off`, offer,{headers:this.createAuthorizationHeader()});
  }

  updateOffer(offer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/off`, offer,{headers:this.createAuthorizationHeader()});
  }

  deleteOffer(offerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/off/${offerId}`,{headers:this.createAuthorizationHeader()});
  }
  
  private createAuthorizationHeader() {
    return new HttpHeaders().set(
    "Authorization", "Bearer " + this.token
    )
  
}
}
