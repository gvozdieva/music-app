import {Component, Input, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

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

  private url: string = '';

  constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute ) {
    this.route.queryParams.subscribe((params: any) => {
      this.url = params['song']
    })
  }

  goToUrl(): void {
    this.document.location.href = this.url;
  }
}
