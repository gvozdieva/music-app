import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SongsComponent } from './components/songs/songs.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { GenreFunkComponent } from './components/genre-funk/genre-funk.component';
import { GenreSoulComponent } from './components/genre-soul/genre-soul.component';
import { GenreJazzComponent } from './components/genre-jazz/genre-jazz.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { SongItemComponent } from './components/songs/songs-list/song-item/song-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SongsComponent,
    AuthorsComponent,
    GenreFunkComponent,
    GenreSoulComponent,
    GenreJazzComponent,
    SongsListComponent,
    SongItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
