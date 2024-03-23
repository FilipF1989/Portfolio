import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, Renderer2, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';
import { inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../shared/services.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements AfterViewInit, OnDestroy, OnInit {
  arrowAnimaeImg: string = 'assets/img/Property1=Variant3.png';

  communicationService = inject(CommunicationService);
  render = inject(Renderer2);
  el = inject(ElementRef)
  language: string = 'en';
  private subscription: Subscription;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.subscription = this.communicationService.getTranslateFunction().subscribe((language: string) => {
      this.language = language;
    });
  }

  ngOnInit(): void {
    let choosedLanguage = localStorage.getItem('lanuage');
    if (choosedLanguage) {
      this.language = choosedLanguage;
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  article: { en: string, de: string } = {
    en: "Hello from Stuttgart! I'm a novice web developer, fluent in German and good in English, excited to share my early steps in coding. Stuttgart is my home, drawing inspiration from its tech scene. As a bilingual beginner, I'm navigating the world of web development, eager to learn and grow. My journey includes a simple Jump and Run game, along with several other projects. I've developed a Kanban project called 'Join' in a group, as well as a Pokédex and a CRM system. These projects have not only taught me the basics of programming but also strengthened my passion for creating interactive applications.",
    de: "Hallo aus Stuttgart! Ich bin ein angehender Webentwickler, fließend in Deutsch und gut in Englisch.Als zweisprachiger Anfänger navigiere ich durch die Welt der Webentwicklung und bin gespannt darauf, zu lernen und mich weiterzuentwickeln. Meine Reise beinhaltet ein einfaches Jump-and-Run-Spiel, sowie verschiedene andere Projekte. Ich habe ein Kanban-Projekt namens 'Join' in einer Gruppe entwickelt, ebenso wie einen Pokédex und ein CRM-System. Diese Projekte haben mir nicht nur die Grundlagen des Programmierens vermittelt, sondern auch meine Leidenschaft für das Erstellen interaktiver Anwendungen gestärkt."
  };




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
    const isAtBottom = (window.innerHeight - 100) <= Math.ceil(window.scrollY);

    if (isAtBottom) {
      animation.classList.add('moveArrowLeftAnimation');
    }
  }

}



