import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MusicListService} from "../../services/music-list.service";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit{

  songs: any

  listen: boolean = true

  onListenedSong(item: any) {
    item.listened = this.listen
  }

  constructor(
    private route: ActivatedRoute,
    private MusicListService: MusicListService
  ) {}


  ngOnInit(): any {
      this.route.params.subscribe( (params: Params) => {
        this.songs = this.MusicListService.sortByGenre(params.genreName);
      });
  }
}
