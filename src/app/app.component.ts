import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomepageComponent } from '../containers/homepage/homepage.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fichaRpg';
}
