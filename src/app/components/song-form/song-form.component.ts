import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MusicListService, Song} from "../../services/music-list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  form!: FormGroup
  songsList = this.MusicListService.songsList

  id: any = this.activatedRoute.snapshot.params.id;

  elementName: any
  elementAuthor: any
  elementUrl: any
  elementTime: any
  elementGenre: any

  public editMode = false

  constructor(
    private MusicListService: MusicListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    // console.log(id)

    this.songsList.filter(el => {
      if (+id === +el.id)
        this.elementName = el.name,
          this.elementAuthor = el.author,
          this.elementTime = el.time,
          this.elementUrl = el.link,
          this.elementGenre = el.genre
      // return this.element
    })
    // console.log(this.elementName)

    // console.log(activatedRoute)
  }

  ngOnInit () {
    this.form = new FormGroup({
      url: new FormControl('' || this.elementUrl, Validators.required),
      select: new FormControl('' || this.elementGenre, Validators.required),
      name: new FormControl('' || this.elementName, Validators.required),
      author: new FormControl('' || this.elementAuthor, Validators.required),
      time: new FormControl('' || this.elementTime, Validators.required),
    })

    const routerUrl = this.router.url
    this.editMode = routerUrl.includes('edit')
    console.log('editMode', this.editMode)
  }

  // onSubmitEdit() {
  //   this.songsList.map(el => el.id)
  // }

  index = this.songsList.indexOf(this.id)
  el = this.songsList[this.index]

  submit(e: any) {
    if (this.form.valid) {

      // console.log('Form: ', this.form)
      const formData = {...this.form.value}
      // console.log('FormData : ', formData)
      // console.log('songs list : ', this.songsList)

      const author = formData.author
      const url = formData.url
      const genre = formData.select
      const time = formData.time
      const name = formData.name

      if (!this.editMode) {
        this.MusicListService.addNewSong({
          genre: genre,
          name: name,
          link: url,
          author: author,
          time: time
        })

        // clear all fields on submit
        this.form.reset()
      }

      if (this.editMode) {
      //   console.log(formData)
      //   this.songsList.map((el) => {
      //     if (el.id === this.id) {
      //       console.log(el)
      //     }
      //   })
      //
      //   this.editSong(this.id, "foo", 'keke', 'soul', '4326', 'nana');
      //
      //   console.log(this.songsList)

        this.el.name = name;
        this.el.genre = genre;
        this.el.link = url;
        this.el.author = author;
        this.el.time = time;
      }

    }
  }

  checkControl(name: any) {
    // @ts-ignore
    return this.form.get(name)?.touched && this.form.get(name)?.invalid;
  }


  // editSong(id: number, author: string, url: string, genre: string, time: string, name: string) {
  //   this.songsList.forEach(obj => {
  //     if (obj.id === this.id) {
  //       return {...obj, author, url, genre, time, name};
  //     }
  //     return obj;
  //   });
  //   console.log(id);
  // }

}
