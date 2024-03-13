import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  {


  constructor( private router: Router) { }

  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/impressum'])
    );

    window.open(url, '_blank');
  }
}
