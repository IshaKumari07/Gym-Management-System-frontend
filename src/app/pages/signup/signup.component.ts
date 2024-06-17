import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private authService: UserService) { }
 
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }
 
  formSubmit(): void {
    if (this.registerForm.valid) {
      // Call your AuthService's signUp method with the form value
      this.authService.signUp(this.registerForm.value)
        .subscribe(
          response => {
            // Handle successful registration response here
            console.log('Registration successful:', response);
          },
          error => {
            // Handle error response here
            console.error('Registration failed:', error);
          }
        );
      } else {
        // Handle form validation errors
        alert('Please fill all the required fields correctly.');
      }
    }
  }
 
 