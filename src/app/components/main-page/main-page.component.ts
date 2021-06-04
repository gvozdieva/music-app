import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  template:`
    <p>Some genres here:</p>
    <nav>
      <a routerLink="/songs" song="funkS">Funk</a>
      <br><a routerLink="/songs">Soul</a>
      <br><a routerLink="/songs">Jazz</a>
    </nav>

  `
})
export class MainPageComponent {

  // soulS: string = 'sooooooul'
  // funkS: string = 'fuuunk'
  // jazzS: string = 'jaaaaaz'

  soulS: string = 'https://www.youtube.com/watch?v=XXx6RDzR6eM&list=PLLxR63CpId30GJl75bZOu1jKDK5vMHWO-&index=7'
  funkS: string = 'https://www.youtube.com/watch?v=W6GUV0C2mXo'
  jazzS: string = 'https://www.youtube.com/watch?v=ZEcqHA7dbwM'



  // constructor() { }

  // ngOnInit(): void {
  // }

}
