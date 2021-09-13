import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MusicListService, Song} from "../../services/music-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public songsList: any;
  public id: any;

  elementName: any;
  elementAuthor: any;
  elementUrl: any;
  elementTime: any;
  elementGenre: any;

  index: any;
  el: any;

  public subscr: Subscription = new Subscription();

  public editMode = false;

  constructor(
    private MusicListService: MusicListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit () {
    // this.songsList = this.MusicListService.getJsonData();
    this.id = this.activatedRoute.snapshot.params.id;

    this.form = new FormGroup({
      url: new FormControl('' || this.elementUrl, Validators.required),
      select: new FormControl('' || this.elementGenre, Validators.required),
      name: new FormControl('' || this.elementName, Validators.required),
      author: new FormControl('' || this.elementAuthor, Validators.required),
      time: new FormControl('' || this.elementTime, Validators.required),
    })

    const routerUrl = this.router.url
    this.editMode = routerUrl.includes('edit')
    // console.log('editMode', this.editMode)


    this.subscr = this.MusicListService.dataLoaded.subscribe(status => {
      if (status) {
        if (this.editMode) {
          //get song by id from service
          const song = this.MusicListService.getSongById(this.id);

          this.initData(song);
          // console.log(song);
        }
      }
    })



    // this.MusicListService.getJsonData().subscribe((response: any) => {
    //   this.initData(response);
    // })
  }

  public initData(song: any) {



        this.elementName = song.name;
          this.elementAuthor = song.author;
          this.elementTime = song.time;
          this.elementUrl = song.link;
          this.elementGenre = song.genre;
        // return this.element

        this.form.setValue({
          select: this.elementGenre,
          url: this.elementUrl,
          name: this.elementName,
          author: this.elementAuthor,
          time: this.elementTime
        });

    // this.index = this.songsList.indexOf(this.id)
    // this.el = this.songsList[this.index]
  }

  // onSubmitEdit() {
  //   this.songsList.map(el => el.id)
  // }

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
      } else {
        this.MusicListService.updateSong({
          id: +this.id,
          name: name,
          genre: genre,
          link: url,
          author: author,
          time: time
        });
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


  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

}
