import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MySkillComponent } from './landing-page/my-skill/my-skill.component';
import { PortfolioSectionComponent } from './landing-page/portfolio-section/PortfolioSectionComponent';
import { ImpressumComponent } from './impressum/impressum.component';




export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'mySkills', component: MySkillComponent},
    { path: 'portfolio', component: PortfolioSectionComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'navigation', component: NavigationComponent },
];
