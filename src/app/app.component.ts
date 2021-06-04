import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Music Genres App</h1>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  title = 'music-app';
}
