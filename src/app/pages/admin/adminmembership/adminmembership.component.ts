import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Membership } from '../../../models/membership';
import { MembershipService } from '../../../services/membership.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Navbar2Component } from '../../../navbar2/navbar2.component';

@Component({
  selector: 'app-adminmembership',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarComponent,Navbar2Component],
  templateUrl: './adminmembership.component.html',
  styleUrl: './adminmembership.component.css'
})
export class AdminmembershipComponent {
  memberships: Membership[] = [];
  newMembership: Membership = new Membership(0, '', false, '', 0);

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

deleteMembership(membershipId: number): void {
  this.membershipService.deleteMembership(membershipId).subscribe(
    () => {
      // Assuming the trainer is deleted successfully, you may remove it from the equipments array
      this.memberships = this.memberships.filter(t => t.membershipId !== membershipId);
    },
    error => console.log(error)
  );
}

}