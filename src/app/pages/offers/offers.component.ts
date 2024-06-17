import { Component } from '@angular/core';
import { Router } from 'express';
import { Offer } from '../../models/offers';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { OffersService } from '../../services/offers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers: Offer[] = [];
 

  constructor(private offerService: OffersService) { }

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
}
