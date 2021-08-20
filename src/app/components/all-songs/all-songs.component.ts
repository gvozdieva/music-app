import { Component, OnInit } from '@angular/core';
import {MusicListService} from "../../services/music-list.service";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {

  songs = this.MusicListService.songsList

  listen: boolean = true

  onListenedSong(item: any) {
    item.listened = this.listen
  }

  constructor(
    private MusicListService: MusicListService
  ) { }

  ngOnInit(): void {
  }

}
