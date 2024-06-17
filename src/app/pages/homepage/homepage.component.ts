import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   
  constructor(private authService:AuthService,private router:Router){

  }
  logout(){
    this.authService.logout;
    console.log('clicked');
    this.router.navigate(['']);
  
  }
}
