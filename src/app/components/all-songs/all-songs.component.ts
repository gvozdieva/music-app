import { Component, OnInit } from '@angular/core';
import {MusicListService} from "../../services/music-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent {

  songs = this.MusicListService.songsList

  listen: boolean = true

  onListenedSong(item: any) {
    item.listened = this.listen
  }

  constructor(
    private MusicListService: MusicListService
  ) {
  }


}
