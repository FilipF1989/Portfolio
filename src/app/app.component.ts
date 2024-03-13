import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { routes } from './app.routes';
import { after } from 'node:test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LandingPageComponent,
    CommonModule,
    RouterOutlet 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
 
}
