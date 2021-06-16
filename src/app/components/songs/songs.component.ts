import {Component, Input, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html'
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

  // constructor(private http: HttpClient) { }
  // // CREATE FETCH REQUEST
}
