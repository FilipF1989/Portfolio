import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  arrowRight: string = 'assets/img/arrowRight.png';
  animationState: boolean = false;

  


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let animation: any = document.querySelector('.arrowLeftImg');
    const isAtBottom = ( window.innerHeight - 100) <= Math.ceil(window.scrollY);
    
    if (isAtBottom) {
      animation.classList.add('moveArrowLeftAnimation'); 
    }
  }
}
