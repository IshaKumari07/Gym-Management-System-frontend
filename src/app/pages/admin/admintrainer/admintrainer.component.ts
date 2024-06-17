import { Component } from '@angular/core';
import { Trainer } from '../../../models/trainer';
import { TrainerService } from '../../../services/trainer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Navbar2Component } from '../../../navbar2/navbar2.component';

@Component({
  selector: 'app-admintrainer',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarComponent,Navbar2Component],
  templateUrl: './admintrainer.component.html',
  styleUrl: './admintrainer.component.css'
})

export class AdmintrainerComponent {
  trainers: Trainer[] = [];
  editedTrainer: Trainer = new Trainer(0,'','',0,'','');
  isEditing = false;

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
  deleteTrainer(trainerId: number): void {
    this.trainersService.deleteTrainer(trainerId).subscribe(
      () => {
        // Assuming the trainer is deleted successfully, you may remove it from the trainers array
        this.trainers = this.trainers.filter(t => t.trainerId !== trainerId);
      },
      error => console.log(error)
    );
  }

  
  

}