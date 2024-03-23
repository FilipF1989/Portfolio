import { Component, HostListener, ViewChild, ElementRef, Renderer2, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../shared/services.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-my-skill',
  standalone: true,
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements  OnDestroy, OnInit {
  arrowRight: string = 'assets/img/arrowRight.png';
  animationState: boolean = false;
  communicationService = inject(CommunicationService);
  language: string = 'en';
  private subscription: Subscription;



  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
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


  @ViewChild('arrowRightImg') arrowRightImg!: ElementRef;
  

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
