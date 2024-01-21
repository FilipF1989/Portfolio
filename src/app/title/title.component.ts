import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  arrowImages = [
    'assets/img/Property1=Default.png',
    'assets/img/Property1=Variant2.png',
    'assets/img/Property1=Variant3.png',
    'assets/img/Property1=Variant4.png',
    'assets/img/Property1=Variant5.png',
    'assets/img/Property1=Variant6.png',
    'assets/img/Property1=Variant7.png',
  ];

  arrowAnimaeImg: string = '';

  ngOnInit(): void {
    let index = 0;
    setInterval(() => {
      this.arrowAnimaeImg = this.arrowImages[index];
      index = (index + 1) % this.arrowImages.length;
    });

  }
}
