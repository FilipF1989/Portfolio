import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ElementRef } from '@angular/core';
import { QueryList } from '@angular/core';
import { log } from 'node:console';



@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent implements AfterViewInit {
  portfolioItems: { title: string; tehnologies: string; description: string; imageUrl: string; gitLink: string; dFlexDir: boolean; smallDispaly?: number; }[] = [
    {
      title: 'Join',
      tehnologies: 'Javascipt | HTML | CSS | API',
      description: 'Task manager inspired by the Kanban System.Create and organize tasks using drag  and drop functions.asiggn user and categories',
      imageUrl: '/assets/img/joinLogo.jpg',
      gitLink: 'http://join.filip-filipovic.de/',
      dFlexDir: false
    },
    {
      title: 'Pokedex',
      tehnologies: 'Javascipt | HTML | CSS | API',
      description: 'A simple library based on the PokéAPI that lists all existing pokémon and their most important information. Click on a pokémon and get even more information about stats, attacks and evolutions.',
      imageUrl: '/assets/img/pokedexLogo.jpg',
      gitLink: 'https://pokedex.filip-filipovic.de',
      dFlexDir: true,
      smallDispaly: 2
    },
    {
      title: 'Simple-CRm',
      tehnologies: 'Angular | TypeScript | Firebase',
      description: 'Introducing a streamlined CRM tool designed for effective management of business essentials, including user accounts, customer profiles, orders, and items. Built on Google\'s Firebase database for secure and reliable data handling.',
      imageUrl: '/assets/img/crm.png',
      gitLink: '#',
      dFlexDir: false
    },
    {
      title: 'El Pollo Loco',
      tehnologies: 'Javascipt | Html | Css ',
      description: 'A fun platform game, based on object-oriented programming (OOP). You are navigating the character Pepe through a level while collecting bottles, which you can throw on you enemies.',
      imageUrl: '/assets/img/elPolloLocoImg.png',
      gitLink: 'https://el-pollo-loco.filip-filipovic.de/',
      dFlexDir: true,
      smallDispaly: 2
    }
  ];
  @ViewChildren('divs') divs!: QueryList<ElementRef>;


  ngAfterViewInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const divArray: ElementRef[] | number[] = this.divs.toArray();

    divArray.forEach((div) => {
      const divAnime = div.nativeElement.classList.contains('active');
      const rect = div.nativeElement.getBoundingClientRect();
      const isDivVisible = rect.bottom - 100 <= window.innerHeight;
      if (typeof window !== undefined){
        if(isDivVisible && window.innerWidth < 1200 && !divAnime){
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
