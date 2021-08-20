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
  songsList = this.MusicListService.songsList

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
      // const id = this.songsList.length + 1
      const author = formData.author
      const url = formData.url
      const genre = formData.select
      const time = formData.time
      const name = formData.name

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
  }

  onCreateClick() {
    if (this.form.get('select')) {
      // @ts-ignore
      console.log(this.form.get('select').status);
    }
  }

  checkControl(name: any) {
    // @ts-ignore
    return this.form.get(name)?.touched && this.form.get(name)?.invalid;
  }
}
