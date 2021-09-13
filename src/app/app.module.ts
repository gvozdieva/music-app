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
import { AllSongsComponent } from './components/all-songs/all-songs.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SongsListComponent,
    SongItemComponent,
    ErrorComponent,
    SongFormComponent,
    AllSongsComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
