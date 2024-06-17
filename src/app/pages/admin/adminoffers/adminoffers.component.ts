import { Component } from '@angular/core';
import { Offer } from '../../../models/offers';
import { OffersService } from '../../../services/offers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Navbar2Component } from '../../../navbar2/navbar2.component';

@Component({
  selector: 'app-adminoffers',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarComponent,Navbar2Component],
  templateUrl: './adminoffers.component.html',
  styleUrl: './adminoffers.component.css'
})
export class AdminoffersComponent {
  offers: Offer[] = [];
 

  constructor(private offerService: OffersService,private loginService:LoginService,private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }


  getOffers(): void {
    this.offerService.getAllOffers().subscribe(
      (data: Offer[]) => {
        this.offers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteOffer(offerId: number): void {
    this.offerService.deleteOffer(offerId).subscribe(
      () => {
        this.offers = this.offers.filter(o => o.offerId !== offerId);
      },
      error => {
        console.log(error);
      }
    );
  }

  logout(){
    this.authService.logout;
    console.log("Clicked");
    this.router.navigate(['']);
  }
}
