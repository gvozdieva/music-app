import {Component, OnInit} from '@angular/core';
import {MusicListService} from "./services/music-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'music-app';

  constructor(
    private MusicListService: MusicListService
  ) {}

  ngOnInit() {
    console.log('AppComponent');
    this.MusicListService.getJsonData().subscribe((response: any) => {
      this.MusicListService.setSongsList(response);
    })
  }
}
