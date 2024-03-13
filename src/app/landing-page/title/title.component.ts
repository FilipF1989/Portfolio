import { CommonModule } from '@angular/common';
import { Component , ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements AfterViewInit {
  arrowAnimaeImg: string = 'assets/img/Property1=Variant3.png';
 
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const result = this.el.nativeElement.querySelector('.imageAnimation');
    if (result) {
          result.classList.add('translate');
        }
  }

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



