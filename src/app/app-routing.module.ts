import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {ErrorComponent} from "./components/error/error.component";
import {SongsListComponent} from "./components/songs-list/songs-list.component";
import {SongFormComponent} from "./components/song-form/song-form.component";
import {AllSongsComponent} from "./components/all-songs/all-songs.component";
import {LoginComponent} from "./components/login/login.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'genre/:genreName', component: SongsListComponent},
  {path: 'songs/create', component: SongFormComponent},
  {path: 'songs/edit/:id', component: SongFormComponent},
  {path: 'songs/allSongs', component: AllSongsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent },
  {path: '**', redirectTo: 'error' },
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
