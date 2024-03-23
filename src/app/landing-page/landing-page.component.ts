import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { PortfolioSectionComponent } from './portfolio-section/PortfolioSectionComponent';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';
import { title } from 'process';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    TitleComponent,
    MySkillComponent,
    FormSectionComponent,
    PortfolioSectionComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  constructor(private titleservice : Title){}

  ngOnInit(): void {
    this.titleservice.setTitle('Filip FIlipovic')
  }
}
