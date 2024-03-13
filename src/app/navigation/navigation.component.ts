import { Component, ViewChild, ElementRef, AfterViewInit , Renderer2, inject} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements AfterViewInit{

  router = inject(Router);
  @ViewChild('burger') burger!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    
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
