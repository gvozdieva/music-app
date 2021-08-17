import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongItemComponent } from './components/songs-list/song-item/song-item.component';
import { ErrorComponent } from './components/error/error.component';
import { SongFormComponent } from './components/song-form/song-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SongsListComponent,
    SongItemComponent,
    ErrorComponent,
    SongFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
