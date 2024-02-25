import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  portfolioItems: { title: string, tehnologies: string, description: string, imageUrl: string ,gitLink:string, dFlexDir:boolean}[] = [
    {
      title: 'Join',
      tehnologies: 'Javascipt | HTML | CSS | API',
      description: 'Task manager inspired by the Kanban System.Create and organize tasks using drag  and drop functions.asiggn user and categories',
      imageUrl: '/assets/img/join.png',
      gitLink:'https://github.com/FilipF1989/Join-',
      dFlexDir:false
    },
    {
      title: 'Pokedex',
      tehnologies: 'Javascipt | HTML | CSS | API',
      description: 'A simple library based on the PokéAPI that lists all existing pokémon and their most important information. Click on a pokémon and get even more information about stats, attacks and evolutions.',
      imageUrl: '/assets/img/pokemon.png',
      gitLink:'https://github.com/FilipF1989/Pokedex',
      dFlexDir:true
      
    },
    {
      title: 'Simple-CRm',
      tehnologies: 'Angular | TypeScript | Firebase',
      description: 'Introducing a streamlined CRM tool designed for effective management of business essentials, including user accounts, customer profiles, orders, and items. Built on Google\'s Firebase database for secure and reliable data handling.',
      imageUrl: '/assets/img/crm.png',
      gitLink:'#',
      dFlexDir:false

      
    },
    {
      title: 'El Pollo Loco',
      tehnologies: 'Javascipt | Html | Css ',
      description: 'A fun platform game, based on object-oriented programming (OOP). You are navigating the character Pepe through a level while collecting bottles, which you can throw on you enemies.',
      imageUrl: '/assets/img/elPolloLoco.png',
      gitLink:'https://github.com/FilipF1989/Game-El-Pollo-Loco',
      dFlexDir:true
    }
  ]

}
