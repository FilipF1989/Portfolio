import { CommonModule } from '@angular/common';
import { Component , ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  

}



