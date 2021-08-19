import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MusicListService} from "../../services/music-list.service";

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  form!: FormGroup

  constructor(
    private MusicListService: MusicListService
  ) {
  }

  ngOnInit () {

    this.form = new FormGroup({
      url: new FormControl('', Validators.required),
      select: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
    })
  }

  submit() {
    if (this.form.valid) {

      console.log('Form: ', this.form)
      const formData = {...this.form.value}
      console.log('FormData : ', formData)
      const id = formData.id
      const author = formData.author
      const url = formData.url
      const genre = formData.select
      const time = formData.time
      const name = formData.name

      this.MusicListService.songsList.push({
        id: id,
        genre: genre,
        name: name,
        link: url,
        author: author,
        time: time,
        listened: false,
      })

      console.log(this.MusicListService.songsList)

      // clear all fields on submit
      this.form.reset()
    }
  }
}
