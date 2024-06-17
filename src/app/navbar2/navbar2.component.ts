import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
  constructor(private authService:AuthService,private router:Router){

  }
  logout(){
    this.authService.logout;
    console.log('clicked');
    this.router.navigate(['']);
  
  }
}
