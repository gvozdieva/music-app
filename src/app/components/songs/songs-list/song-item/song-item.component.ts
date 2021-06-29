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

  constructor() { }


}
