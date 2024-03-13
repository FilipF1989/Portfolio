import { AfterViewInit, Component, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  
  selector: 'app-my-skill',
  standalone: true,
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements AfterViewInit {
  arrowRight: string = 'assets/img/arrowRight.png';
  animationState: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @ViewChild('arrowRightImg') arrowRightImg!: ElementRef;

  ngAfterViewInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: any) {
    const animation = this.arrowRightImg.nativeElement;
    const rect = animation.getBoundingClientRect().bottom;
    const isArrowVisible = rect - 100 <= window.innerHeight;

    if (isArrowVisible) {
      this.renderer.addClass(animation, 'moveArrowRightAnimation');
    }
  }
}
