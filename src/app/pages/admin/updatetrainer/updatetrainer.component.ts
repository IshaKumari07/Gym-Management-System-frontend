import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trainer } from '../../../models/trainer';
import { TrainerService } from '../../../services/trainer.service';

@Component({
  selector: 'app-updatetrainer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatetrainer.component.html',
  styleUrl: './updatetrainer.component.css'
})
export class UpdatetrainerComponent implements OnInit{

  trainer: Trainer[] = [];


  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    // You can call loadTrainers() here if you want to load trainers when the component initializes
  }


  updateTrainer(trainer: Trainer): void {
    this.trainerService.updateTrainer(trainer).subscribe(
      () => {
        // Assuming the trainer is updated successfully, you may update the trainers array accordingly
        const index = this.trainer.findIndex(t => t.trainerId === trainer.trainerId);
        if (index !== -1) {
          this.trainer[index] = trainer;
        }
      },
      error => console.log(error)
    );
  }

}
