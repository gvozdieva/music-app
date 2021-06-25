import { Component } from '@angular/core';
import {SongModel} from "../song.model";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {

  songs: SongModel[] = [
    new SongModel('You',
      'https://www.youtube.com/watch?v=Zp1okMSCXEM',
      'Mk.gee',
      '5:10',
      true),
    new SongModel('Groovejet (If This Ain\'t Love)',
      'https://www.youtube.com/watch?v=npJTeRjRX-8',
      'DJ Spiller feat. Sophie Ellis-Bextor',
      '4:07',
      true),
    new SongModel('Enjoy your life',
      'https://www.youtube.com/watch?v=_6kgC-3s7Xg',
      'Oby Onyioha',
      '5:57',
      false),
    new SongModel('Constant Surprises',
      'https://www.youtube.com/watch?v=F3ZE1w6dLUs',
      'Little Dragon',
      '3:11',
      false),
    new SongModel('Molasses',
      'https://www.youtube.com/watch?v=2Ynj2lBHV_0',
      'Hiatus Kaiyote',
      '4:52',
      false)
  ]
  constructor() { }

}
