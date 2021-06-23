import {Component, Input, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {

  ServerCreationStatus = 'No server was created!'
  ServerName = 'Testserver'
  ServerCreated = false
  servers = ['testserver', 'testserver 2']
  // songs = [
  //   {name & url}
  //   {}
  //   {}
  // ]

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

  onCreateServer() {
    this.ServerCreated = true
    this.ServerCreationStatus = 'Server Created! Name is ' + this.ServerName
    this.servers.push(this.ServerName)
}

  onUpdateServerName(event: Event) {
    this.ServerName = (<HTMLInputElement>event.target).value
  }

  getColor() {
    return this.ServerCreated ? 'green' : 'red'
  }

  // constructor(private http: HttpClient) { }
  // // CREATE FETCH REQUEST
}
