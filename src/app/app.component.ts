import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.custom.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PersonalWebsite';

  currentPage: string = 'profile';
}
