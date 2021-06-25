export class SongModel {
  public name: string;
  public url: string;
  public author: string;
  public time: string;

  constructor (name: string, url: string, author: string,time: string) {
    this.name = name;
    this.url = url;
    this.author = author;
    this.time = time;
  }
}
