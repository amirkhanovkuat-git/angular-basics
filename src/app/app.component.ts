import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  img = 'https://www.medianic.co.uk/wp-content/uploads/2018/08/ReactLogo-2.jpg';

  constructor() {
    setTimeout(() => {
      this.img = 'https://angular.kr/assets/images/logos/angular/angular.png';
    }, 5000);

  }
}
