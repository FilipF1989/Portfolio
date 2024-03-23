import { Component, ViewChild, ElementRef, Renderer2, inject, OnDestroy, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../shared/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnDestroy, OnInit{

  router = inject(Router);
  elementRef = inject(ElementRef);
  renderer= inject(Renderer2);
  communicationService = inject(CommunicationService);
  private subscription: Subscription;
  @ViewChild('burger') burger!: ElementRef;
  language: string = 'en';


  constructor() {
    this.subscription = this.communicationService.getTranslateFunction().subscribe((language: string) => {
      this.language = language;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    let choosedLanguage = localStorage.getItem('lanuage');
    if (choosedLanguage) {
      this.language = choosedLanguage;
    }
  }
 

  toggleMenu() {
    const hamIsActive = this.burger.nativeElement.classList.contains('active');
    if (hamIsActive) {
      this.burger.nativeElement.classList.remove('active');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 300);
    } else {
      this.burger.nativeElement.classList.add('active');
    }
  }
  
}
