import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule , Router} from '@angular/router';
import { inject } from '@angular/core';
import { ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  
  router = inject(Router);
  @ViewChild('burger') burger!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    
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
