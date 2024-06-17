import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Membership } from '../../../models/membership';
import { MembershipService } from '../../../services/membership.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-addmembership',
  standalone: true,
  imports: [ReactiveFormsModule,SidebarComponent],
  templateUrl: './addmembership.component.html',
  styleUrl: './addmembership.component.css'
})
export class AddmembershipComponent {
  membershipForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private membershipService: MembershipService
  ) {
    this.createMembership();
  }
  
   createMembership(){
    this.membershipForm = this.formBuilder.group({
      membershipId: ['', Validators.required],
      memberName: ['', Validators.required],
      active: [''],
      desc: [''],
      payment: ['', Validators.required]
    });
   }
  onSubmit() {
    if (this.membershipForm.valid) {

    this.membershipService.addMembership(this.membershipForm.value)
      .subscribe(
        response => {
          console.log('Membership added successfully:', response);
          this.membershipForm.reset();
        },
        error => {
          console.error('Error occurred while adding membership:', error);
        }
      );
  }
  }
}