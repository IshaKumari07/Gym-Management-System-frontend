import { Component, OnInit } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { EquipmentService } from '../../services/equipment.service';
import { NgForOf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [NgForOf,NavbarComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent implements OnInit{
  myimage:string="https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg";

  equipments: Equipment[]=[];

  constructor(private equipmentService: EquipmentService,private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.equipmentService.getAllEquipment().subscribe(data => {
      this.equipments = data;
    });
}


//  isLogged(){
//   if(!(this.authService.isLoggedIn() && this.authService.getToken()!=null && this.authService.getToken()!=' ')){
//     this.router.navigate(['/login']);
//   }
//  }
}