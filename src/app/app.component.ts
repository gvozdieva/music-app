import {Component, OnInit} from '@angular/core';
import {MusicListService} from "./services/music-list.service";
import {ListService} from "test-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  login = true
  logout = false

  list: string[] = [];

  constructor(
    private MusicListService: MusicListService,
    private svc$: ListService
  ) {}

  ngOnInit() {
    this.MusicListService.getJsonData().subscribe((response: any) => {
      this.MusicListService.setSongsList(response);
    })

    this.svc$.list.subscribe((value => this.list = [...this.list, value]));
  }
}
