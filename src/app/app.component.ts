import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GymFrontEnd';
}
