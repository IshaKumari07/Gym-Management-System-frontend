import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{

  loginForm: FormGroup;
  error: string | null = null;
 
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
 
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getRole() as string;
      
    }
  }
 
  onSubmit(): void {
    console.log('login btn clicked');
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
 
      this.loginService.signIn(credentials).subscribe(
        (response: any) => {
          
          const { token, role } = response;
          console.log('Token:', token);
         
          this.authService.setToken(token);
          this.authService.setRole(role);
         // this.authService.setLogIn(true);
          this.redirectBasedOnRole(role);
          console.log('User',role);
        },
        error => {
          console.error('Sign-in failed:', error);
          this.error = error;
        }
      );
    }
  }
 
  private redirectBasedOnRole(role: string): void {
    if (role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } 
    else if(role === 'USER') {
      this.router.navigate(['/homepage']);
    }
    else{
      this.router.navigate(['']);
    }
  }
}
//   loginForm: FormGroup;
//   error: string | null = null;
 
//   constructor(
//     private formBuilder: FormBuilder,
//     private loginService: LoginService,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }
 
//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const credentials = {
//         email: this.loginForm.value.email,
//         password: this.loginForm.value.password
//       };
 
//       this.loginService.signIn(credentials).subscribe(
//         token => {
//           console.log('Token:', token);
//           localStorage.setItem('token', token);
//           this.router.navigate(['/homepage']);
//         },
//         error => {
//           console.error('Sign-in failed:', error);
//           this.error = error;
//         }
//       );
//     }
//   }
 
//   ngOnInit(): void {
//     const token = this.authService.getToken();
//     if (!token) {
//       // Handle case where token is not available
//     }
//   }
// }
