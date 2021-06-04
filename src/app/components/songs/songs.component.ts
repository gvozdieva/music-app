import {Component, Input, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-songs',
  template: `
    <p>some song of selected genre ( link on youtube maybe and photo of album )</p>

<!--    <p>-->
<!--      Song: {{ song }}-->
<!--&lt;!&ndash;        <a href="{{song}}">Song</a>&ndash;&gt;-->
<!--    </p>-->

    <button type="button" (click)="goToUrl()">Click me!</button>
    <nav>
      <a routerLink="/authors">click to see te author of the song</a>
    </nav>
  `
})
export class SongsComponent {

  @Input() song!: string;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  goToUrl(): void {
    this.document.location.href = "";
  }

}
