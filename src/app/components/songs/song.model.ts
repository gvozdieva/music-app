export class SongModel {
  constructor (public name: string,
               public url: string,
               public author: string,
               public time: string,
               public listenedSong: boolean,
               public newSong: boolean,
               public imgUrl: string
  ) {}
}
