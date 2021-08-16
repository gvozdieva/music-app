import { Injectable } from '@angular/core';
export interface Song {
  genre: string;
  name: string;
  link: string;
  author: string;
  time: string;
  listened: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MusicListService {
  sortByGenre(genreName: string) {
    return this.songsList.filter(songsList => songsList.genre === genreName)
  }

    songsList: Song[] = [
      {
        genre: 'funk',
        name: 'People Get Up And Drive Your Funky Soul',
        link: 'https://www.youtube.com/watch?v=Nl-RVIdTUVI',
        author: 'James Brown',
        time: '9:04',
        listened: false,
      },
      {
        genre: 'funk',
        name: 'funk2',
        link: 'https://www.youtube.com/watch?v=Nl-RVIdTUVI',
        author: 'James Brown',
        time: '9:04',
        listened: false,
      },
      {
        genre: 'soul',
        name: 'Sexual Healing',
        link: 'https://www.youtube.com/watch?v=rjlSiASsUIs',
        author: 'Marvin Gaye',
        time: '4:05',
        listened: false,
      },
      {
        genre: 'soul',
        name: 'soul2',
        link: 'https://www.youtube.com/watch?v=rjlSiASsUIs',
        author: 'Marvin Gaye',
        time: '4:05',
        listened: false,
      },
      {
        genre: 'jazz',
        name: 'I Love You Baby',
        link: 'https://www.youtube.com/watch?v=AiIBKcd4m5Q',
        author: 'Frank Sinatra',
        time: '3:56',
        listened: false,
      },
      {
        genre: 'jazz',
        name: 'jazz2',
        link: 'https://www.youtube.com/watch?v=AiIBKcd4m5Q',
        author: 'Frank Sinatra',
        time: '3:56',
        listened: false,
      },
    ]
}
