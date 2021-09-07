import {Component, OnInit} from '@angular/core';
import {MusicListService} from "./services/music-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  login = true
  logout = false

  constructor(
    private MusicListService: MusicListService
  ) {}

  ngOnInit() {
    this.MusicListService.getJsonData().subscribe((response: any) => {
      this.MusicListService.setSongsList(response);
    })
  }
}
