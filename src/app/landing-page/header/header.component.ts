import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule , Router} from '@angular/router';
import { inject } from '@angular/core';
import { ViewChild, ElementRef, Renderer2} from '@angular/core';
import { CommunicationService } from '../../shared/services.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
  
  router = inject(Router);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  @ViewChild('burger') burger!: ElementRef;
  CommunicationService = inject(CommunicationService);

  translateLanguage(languages:string) {
    this.CommunicationService.translateLanguage(languages);
    localStorage.setItem('lanuage',languages);
  }

  constructor() {
  
  }

 
  toggleMenu() {
    const hamIsActive = this.burger.nativeElement.classList.contains('active');
    if (hamIsActive) {
      this.burger.nativeElement.classList.remove('active');
    } else {
      this.burger.nativeElement.classList.add('active');
      setTimeout(() => {
        this.router.navigate(['/navigation']);
      }, 300);
    }
  }
}
