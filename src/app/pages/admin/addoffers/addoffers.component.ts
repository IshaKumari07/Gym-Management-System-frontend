import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OffersService } from '../../../services/offers.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';


@Component({
  selector: 'app-addoffers',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,SidebarComponent],
  templateUrl: './addoffers.component.html',
  styleUrl: './addoffers.component.css'
})
export class AddoffersComponent {
  constructor(private formBuilder: FormBuilder, private offersService: OffersService) {}

  offersForm!: FormGroup;
   error:String="";

  ngOnInit(): void {
   this.createOfferForm();

  }

  createOfferForm(): void {
    this.offersForm = this.formBuilder.group({
      offerId:['',Validators.required],
      offerName: ['', Validators.required],
      description: ['', Validators.required],
      registrationdeadline: ['', Validators.required],
      status: ['', Validators.required],
      schedule: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

addOffers() {
  if (this.offersForm.valid) {
    this.offersService.addOffer(this.offersForm.value)
      .subscribe(
        (response) => {
          console.log('Offer added successfully:', response);
          // Reset the form or navigate to a different page
        },
        (error) => {
          this.error = 'Error adding offer.';
          console.error('Error adding offer:', error);
        }
      );
  }
}
}

