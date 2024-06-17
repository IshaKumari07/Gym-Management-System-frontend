import { Component, NgModule, OnInit } from '@angular/core';
import { EquipmentService } from '../../../services/equipment.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from '../../sidebar/sidebar.component';


@Component({
  selector: 'app-addquipment',
  standalone: true,
  imports: [ReactiveFormsModule,SidebarComponent],
  templateUrl: './addquipment.component.html',
  styleUrl: './addquipment.component.css'
})
export class AddquipmentComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService) {}

  equipmentForm!: FormGroup;
   error:String="";

  ngOnInit(): void {
   this.createEquipmentForm();

  }

  createEquipmentForm(): void {
    this.equipmentForm = this.formBuilder.group({
      equipmentId:['',Validators.required],
      equipmentName: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

//   addEquipment() {
//     if (this.equipmentForm && this.equipmentForm.valid) {
//       const equipment: Equipment = {
//         equipmentId: this.equipmentForm.get('equipmentId')?.value,
//         equipmentName: this.equipmentForm.get('eqiuipmentName')?.value,
//         description: this.equipmentForm.get('description')?.value,
//         imageUrl: this.equipmentForm.get('imageUrl')?.value
//       };

//       this.equipmentService.addEquipment(equipment).subscribe(
//         (response) => {
//           console.log('Equipment added successfully:', response);
//           // Reset the form or navigate to a different page
//         },
//         (error) => {
//           console.error('Error adding equipment:', error);
//         }
//       );
//     }
//   }
// }
addEquipment() {
  if (this.equipmentForm.valid) {
    this.equipmentService.addEquipment(this.equipmentForm.value)
      .subscribe(
        (response) => {
          console.log('Equipment added successfully:', response);
          // Reset the form or navigate to a different page
          this.equipmentForm.reset();
        },
        (error) => {
          this.error = 'Error adding equipment.';
          console.error('Error adding equipment:', error);
        }
      );
  }
}
}
