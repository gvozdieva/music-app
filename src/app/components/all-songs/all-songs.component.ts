import { Component, OnInit } from '@angular/core';
import {MusicListService} from "../../services/music-list.service";
import {ActivatedRoute} from "@angular/router";

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
    this.songs = this.MusicListService.getAllSongs()
  }

  onListenedSong(item: any) {
    item.listened = this.listen
  }


}
