import { Injectable } from '@angular/core';
export interface Song {
  id: number;
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
        id: 1,
        genre: 'funk',
        name: 'People Get Up And Drive Your Funky Soul',
        link: 'https://www.youtube.com/watch?v=Nl-RVIdTUVI',
        author: 'James Brown',
        time: '9:04',
        listened: false,
      },
      {
        id: 2,
        genre: 'funk',
        name: 'funk2',
        link: 'https://www.youtube.com/watch?v=Nl-RVIdTUVI',
        author: 'James Brown',
        time: '9:04',
        listened: false,
      },
      {
        id: 3,
        genre: 'soul',
        name: 'Sexual Healing',
        link: 'https://www.youtube.com/watch?v=rjlSiASsUIs',
        author: 'Marvin Gaye',
        time: '4:05',
        listened: false,
      },
      {
        id: 4,
        genre: 'soul',
        name: 'soul2',
        link: 'https://www.youtube.com/watch?v=rjlSiASsUIs',
        author: 'Marvin Gaye',
        time: '4:05',
        listened: false,
      },
      {
        id: 5,
        genre: 'jazz',
        name: 'I Love You Baby',
        link: 'https://www.youtube.com/watch?v=AiIBKcd4m5Q',
        author: 'Frank Sinatra',
        time: '3:56',
        listened: false,
      },
      {
        id: 6,
        genre: 'jazz',
        name: 'jazz2',
        link: 'https://www.youtube.com/watch?v=AiIBKcd4m5Q',
        author: 'Frank Sinatra',
        time: '3:56',
        listened: false,
      },
    ]
}
