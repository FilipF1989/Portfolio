import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FooterComponent } from './footer/footer.component';
import { FormSectionComponent } from './form-section/form-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TitleComponent,
    AboutMeComponent,
    MySkillComponent,
    PortfolioSectionComponent,
    FooterComponent,
    FormSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
