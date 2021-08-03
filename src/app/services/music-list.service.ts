import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MusicListService {
    songsList = [
      {
        genre: 'funk',
        name: 'People Get Up And Drive Your Funky Soul',
        link: 'https://www.youtube.com/watch?v=Nl-RVIdTUVI',
        author: 'James Brown',
        time: '9:04',
      },
      {
        genre: 'soul',
        name: 'Sexual Healing',
        link: 'https://www.youtube.com/watch?v=rjlSiASsUIs',
        author: 'Marvin Gaye',
        time: '4:05',
      },
      {
        genre: 'jazz',
        name: 'I Love You Baby',
          link: 'https://www.youtube.com/watch?v=AiIBKcd4m5Q',
        author: 'Frank Sinatra',
        time: '3:56',
      },
    ]
}
