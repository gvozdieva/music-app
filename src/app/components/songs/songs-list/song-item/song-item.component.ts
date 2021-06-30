import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})

export class SongItemComponent {
  @Input() name: string = '';
  @Input() author: string = '';
  @Input() time: string = '';
  @Input() url: string = '';
  @Input() listenedSong: boolean = false;
  @Input() newSong: boolean = false;
  @Input() imgUrl: string = '';

  changeListened() {
    this.listenedSong = true;
  }

  noImgUrl = 'https://image.flaticon.com/icons/png/512/399/399274.png'

  constructor() { }


}
