
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private readonly TOKEN_KEY = 'token';
  private readonly ROLE_KEY = 'role';
  private isAuthenticated: boolean = false; 
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }
 
  isLoggedIn(): boolean {
    let tokenStr;
    if (isPlatformBrowser(this.platformId)) {
     tokenStr = sessionStorage.getItem('token');
    }
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  // return isPlatformBrowser(this.platformId) && !!this.getToken();
  }
 
  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }
 
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(this.TOKEN_KEY);
    } else {
      return null; // Return null or handle the case for server-side rendering
    }
  }
 
  setRole(role: string): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.ROLE_KEY, role);
    }
  }
 
  getRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(this.ROLE_KEY);
    } else {
      return null; // Return null or handle the case for server-side rendering
    }
  }
 
  logout(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   sessionStorage.removeItem(this.TOKEN_KEY);
    //   sessionStorage.removeItem(this.ROLE_KEY);
    // }

    sessionStorage.removeItem(this.TOKEN_KEY);
      sessionStorage.removeItem(this.ROLE_KEY);
   
    
  }
}