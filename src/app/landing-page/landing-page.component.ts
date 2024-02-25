import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    TitleComponent,
    AboutMeComponent,
    MySkillComponent,
    FormSectionComponent,
    PortfolioSectionComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
