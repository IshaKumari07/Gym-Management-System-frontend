import { Component } from '@angular/core';
import { Equipment } from '../../../models/equipment';
import { EquipmentService } from '../../../services/equipment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Navbar2Component } from '../../../navbar2/navbar2.component';

@Component({
  selector: 'app-adminequipment',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarComponent,Navbar2Component],
  templateUrl: './adminequipment.component.html',
  styleUrl: './adminequipment.component.css'
})
export class AdminequipmentComponent {
  equipments: Equipment[]=[];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.getEquipment();
  }
  
  getEquipment(): void {
    this.equipmentService.getAllEquipment()
      .subscribe(
        (equipments: Equipment[]) => {
          this.equipments = equipments;
        },
        (error: any) => {
          console.error('Error fetching trainers:', error);
        }
      );
  
  }
  deleteEquipment(equipmentId: number): void {
    this.equipmentService.deleteEquipment(equipmentId).subscribe(
      () => {
        // Assuming the trainer is deleted successfully, you may remove it from the trainers array
        this.equipments = this.equipments.filter(t => t.equipmentId !== equipmentId);
      },
      error => console.log(error)
    );
  }

}
