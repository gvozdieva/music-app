import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  someData: string[] = ["song 1 ", "song 2 ", "song 3 "];

  getData(): string[] {
    return this.someData;
  }
}
