export class SongModel {
  constructor (public name: string,
               public url: string,
               public author: string,
               public time: string,
               public listenedSong: boolean,
               public newSong: boolean,
               public imgUrl: string
  // add img url ( string 'url../../..' ; '')  если юрл пустой, отображать картинку 'noImage' ( use *ngIf else)
  ) {}
}
