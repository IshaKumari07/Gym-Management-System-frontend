import { Component } from '@angular/core';
import { Trainer } from '../../../models/trainer';
import { TrainerService } from '../../../services/trainer.service';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-addtrainer',
  standalone: true,
  imports: [FormsModule,SidebarComponent],
  templateUrl: './addtrainer.component.html',
  styleUrl: './addtrainer.component.css'
})
export class AddtrainerComponent {
  trainer: Trainer =new Trainer(0,'','',0,'','');

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.trainerService.addTrainer(this.trainer).subscribe({
      next: (response: Trainer) => {
        console.log('Trainer added successfully:', response);
        // Reset trainer object
        this.trainer=new Trainer(0,'','',0,'','');

      },
      error: (error) => {
        console.error('Error adding trainer:', error);
      }
    });
  }
}
