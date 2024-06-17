import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:9090'; 
  token=this.authService.getToken();
  constructor(private http: HttpClient,private authService:AuthService) {}

  getAllEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/adminuser/equipment`,{headers:this.createAuthorizationHeader()});
  }

  getEquipmentById(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/adminuser/equipment/${id}`,{headers:this.createAuthorizationHeader()});
  }

  addEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/admin/equipment`, equipment,{headers:this.createAuthorizationHeader()});
  }

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/admin/equipment`, equipment,{headers:this.createAuthorizationHeader()});
  }

  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/equipment/${id}`,{headers:this.createAuthorizationHeader()});
  }

  private createAuthorizationHeader() {
    

    return new HttpHeaders().set(
    "Authorization", "Bearer " + this.token
    )
  
}
}
