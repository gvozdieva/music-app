import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SongsComponent } from './components/songs/songs.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { SongItemComponent } from './components/songs/songs-list/song-item/song-item.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SongsComponent,
    SongsListComponent,
    SongItemComponent,
    ErrorComponent,
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
