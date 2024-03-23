import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener, inject } from '@angular/core';
import { ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../shared/services.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent implements AfterViewInit, OnInit, OnDestroy {

  CommunicationService = inject(CommunicationService);
  language: string = 'en';
  private subscription: Subscription;


  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getTranslateFunction().subscribe((language: string) => {
      this.language = language;
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  title: { en: string, de: string } = {
    en: 'This page is a sample of my work - please feel free to try them out',
    de: 'Diese Seite ist ein Beispiel meiner Arbeit, bitte zögern Sie nicht, sie auszuprobieren'
  };


  portfolioItems: {
    title: string;
    tehnologies: string;
    languages: {
      en: string;
      de: string;
    };
    imageUrl: string;
    testLink: string;
    gitLink:string;
    dFlexDir: boolean;
    smallDispaly?: number;
  }[] = [
      {
        title: 'Join',
        tehnologies: 'Javascipt | HTML | CSS | API',
        languages: {
          en: 'Task manager inspired by the Kanban System.Create and organize tasks using drag  and drop functions.asiggn user and categories',
          de: 'Aufgabenverwaltung inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen. Weisen Sie Benutzer und Kategorien zu.'
        },
        imageUrl: '/assets/img/joinLogo.jpg',
        testLink: 'http://join.filip-filipovic.de/',
        gitLink:'https://github.com/FilipF1989/Join-',
        dFlexDir: false
      },
      {
        title: 'Pokedex',
        tehnologies: 'Javascipt | HTML | CSS | API',
        languages: {
          en: 'A simple library based on the PokéAPI that lists all existing pokémon and their most important information. Click on a pokémon and get even more information about stats, attacks and evolutions.',
          de: 'Eine einfache Bibliothek basierend auf der PokéAPI, die alle vorhandenen Pokémon und ihre wichtigsten Informationen auflistet. Klicken Sie auf ein Pokémon und erhalten Sie noch mehr Informationen zu Statistiken, Attacken und Entwicklungen.'
        },
        imageUrl: '/assets/img/pokedexLogo.jpg',
        testLink: 'https://pokedex.filip-filipovic.de',
        gitLink:'https://github.com/FilipF1989/Pokedex',
        dFlexDir: true,
        smallDispaly: 2
      },
      {
        title: 'Simple-CRM',
        tehnologies: 'Angular | TypeScript | Firebase',
        languages: {
          en: 'Introducing a streamlined CRM tool designed for effective management of business essentials, including user accounts, customer profiles, orders, and items. Built on Google\'s Firebase database for secure and reliable data handling.',
          de: 'Vorstellung eines schlanken CRM-Tools, das für das effektive Management von Geschäftsgrundlagen entwickelt wurde, einschließlich Benutzerkonten, Kundenprofilen, Bestellungen und Artikeln. Auf Basis der Google Firebase-Datenbank für sichere und zuverlässige Datenverarbeitung aufgebaut.'
        },
        imageUrl: '/assets/img/crm.png',
        testLink: '#',
        gitLink:'#',
        dFlexDir: false
      },
      {
        title: 'El Pollo Loco',
        tehnologies: 'Javascipt | Html | Css ',
        languages: {
          en: 'A fun platform game, based on object-oriented programming (OOP). You are navigating the character Pepe through a level while collecting bottles, which you can throw on you enemies.',
          de: 'Ein unterhaltsames Plattformspiel, basierend auf objektorientierter Programmierung (OOP). Du steuerst den Charakter Pepe durch ein Level, sammelst dabei Flaschen, die du auf deine Feinde werfen kannst.'
        },
        imageUrl: '/assets/img/elPolloLocoImg.png',
        testLink: 'https://el-pollo-loco.filip-filipovic.de/',
        gitLink:'https://github.com/FilipF1989/Game-El-Pollo-Loco',
        dFlexDir: true,
        smallDispaly: 2
      }
    ];


  text: string[] = [];

  ngOnInit(): void {
    let choosedLanguage = localStorage.getItem('lanuage');
    if (choosedLanguage) {
      this.language = choosedLanguage;
    }
  }


  ngAfterViewInit(): void {
    this.portfolioItems.forEach((item) => {
      this.text.push(item.languages.en);
    });
  }

  @ViewChildren('divs') divs!: QueryList<ElementRef>;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const divArray: ElementRef[] | number[] = this.divs.toArray();

    divArray.forEach((div) => {
      const divAnime = div.nativeElement.classList.contains('active');
      const rect = div.nativeElement.getBoundingClientRect();
      const isDivVisible = rect.bottom - 100 <= window.innerHeight;
      if (typeof window !== undefined) {
        if (isDivVisible && window.innerWidth < 1200 && !divAnime) {
          div.nativeElement.classList.add('active');
        }
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (typeof window !== undefined) {
      this.portfolioItems.forEach(item => {
        if (window.innerWidth < 1200 && item.smallDispaly) {
          item.smallDispaly = 1;
        }
        if (window.innerWidth >= 1200 && item.smallDispaly) {
          item.smallDispaly = 2;
        }
      });
    }
  }
}
