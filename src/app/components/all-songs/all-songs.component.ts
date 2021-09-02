import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicListService} from "../../services/music-list.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit, OnDestroy{

  songs: any

  listen: boolean = true

  public subscr: Subscription = new Subscription();

  constructor(
    private MusicListService: MusicListService
  ) {}

  ngOnInit() {
    console.log('AllSongsComponent');
    this.subscr = this.MusicListService.dataLoaded.subscribe(status => {
      if (status) {
        this.songs = this.MusicListService.getSongsList();
      }
    })
  }

  onListenedSong(item: any) {
    item.listened = this.listen
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

}
