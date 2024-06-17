import { Component } from '@angular/core';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registermembership',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registermembership.component.html',
  styleUrl: './registermembership.component.css'
})
export class RegistermembershipComponent {
  memberForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      memberFirstName: ['', Validators.required],
      memberLastName: ['', Validators.required],
      memberEmail: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      membershipName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.memberForm.valid) {
      // Process the form data
      console.log(this.memberForm.value);
      // Reset the form
      this.memberForm.reset();
    } else {
      // Display validation errors to the user
      console.log('Form is invalid');
    }
  }
}