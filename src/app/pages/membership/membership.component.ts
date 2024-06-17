import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Membership } from '../../models/membership';
import { MembershipService } from '../../services/membership.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {
  memberships: Membership[] = [];
  

  constructor(private membershipService: MembershipService) { }

  ngOnInit(): void {
    this.loadMemberships();
  }

  loadMemberships(): void {
    this.membershipService.getAllMemberships().subscribe(
      (data: Membership[]) => {
        this.memberships = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
