// import { Component, OnInit } from '@angular/core';
// import { TrainerService } from '../../services/trainer.service'; 
// import { Trainer } from '../../services/trainer';

// @Component({
//   selector: 'app-trainer',
//   standalone: true,
//   imports: [],
//   templateUrl: './trainer.component.html',
//   styleUrl: './trainer.component.css'
// })

import { Component,OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Trainer } from '../../models/trainer';
import { TrainerService } from '../../services/trainer.service'; 
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [NgForOf,NavbarComponent],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
 

})
export class TrainerComponent implements OnInit{

myimage:string="https://steelsupplements.com/cdn/shop/articles/shutterstock_1674435823_1000x.jpg?v=1644681264";

trainers: Trainer[] = [];

constructor(private trainersService: TrainerService) { }

ngOnInit(): void {
  this.getTrainers();
}

getTrainers(): void {
  this.trainersService.getAllTrainers()
    .subscribe(
      (trainers: Trainer[]) => {
        this.trainers = trainers;
      },
      (error: any) => {
        console.error('Error fetching trainers:', error);
      }
    );

}
}

