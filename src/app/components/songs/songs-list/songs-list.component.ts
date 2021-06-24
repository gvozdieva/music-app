import { Component } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {

  songs = [
    {
      name: 'You',
      url: 'https://www.youtube.com/watch?v=Zp1okMSCXEM',
      author: 'Mk.gee',
      time: '5:10'
    },
    {
      name: 'Groovejet (If This Ain\'t Love)',
      url: 'https://www.youtube.com/watch?v=npJTeRjRX-8',
      author: 'DJ Spiller feat. Sophie Ellis-Bextor',
      time: '4:07'
    },
    {
      name: 'Enjoy your life',
      url: 'https://www.youtube.com/watch?v=_6kgC-3s7Xg',
      author: 'Oby Onyioha',
      time: '5:57'
    },
    {
      name: 'Constant Surprises',
      url: 'https://www.youtube.com/watch?v=F3ZE1w6dLUs',
      author: 'Little Dragon',
      time: '3:11'
    },
    {
      name: 'Molasses',
      url: 'https://www.youtube.com/watch?v=2Ynj2lBHV_0',
      author: 'Hiatus Kaiyote',
      time: '4:52'
    }
  ]

  constructor() { }

}
