import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MySkillComponent } from './landing-page/my-skill/my-skill.component';
import { PortfolioSectionComponent } from './landing-page/portfolio-section/portfolio-section.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent,
children:[
    {path: 'mySkills', component: MySkillComponent}
]},
    {path: 'navigation', component: NavigationComponent},
    {path: 'portfolio', component: PortfolioSectionComponent},
    {path: 'impressum' , component: ImpressumComponent}
];
