import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
    private baseUrl = 'http://localhost:9090'; // Base URL of  Spring Boot application
 // private baseUrl = 'http://localhost:8765/authentication'; // Base URL of gateway

  constructor(private http: HttpClient,private authService:AuthService) { }

  token=this.authService.getToken();
   //headers=new HttpHeaders({'Authorization':`Bearer ${this.token}`});

  getAllTrainers(): Observable<Trainer[]> {
    headers:this.createAuthorizationHeader();
    return this.http.get<Trainer[]>(`${this.baseUrl}/adminuser/trainerDetails`,{headers:this.createAuthorizationHeader()});
   
  }

  addTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(`${this.baseUrl}/admin/addtrainerDetails`, trainer,{headers:this.createAuthorizationHeader()});
  }

  updateTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(`${this.baseUrl}/admin/trainerDetails/${trainer.trainerId}`, trainer,{headers:this.createAuthorizationHeader()});
  }

  deleteTrainer(trainerId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin/trainerDetails/${trainerId}`,{headers:this.createAuthorizationHeader()});
  }

   private createAuthorizationHeader() {
    

      return new HttpHeaders().set(
      "Authorization", "Bearer " + this.token
      )
    
  }
}
