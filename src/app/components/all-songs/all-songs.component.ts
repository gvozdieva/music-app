import { Component, OnInit } from '@angular/core';
import {MusicListService} from "../../services/music-list.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit{

  songs: any

  listen: boolean = true

  constructor(
    private MusicListService: MusicListService
  ) {}

  ngOnInit() {
    this.songs = this.MusicListService.getJsonData()
    this.songs.subscribe((response: any) => {
      this.songs = response
      return this.songs
    })
  }

  onListenedSong(item: any) {
    item.listened = this.listen
  }


}
