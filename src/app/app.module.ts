import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListModule} from "test-lib";
import {BorderModule} from "test-lib";

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongItemComponent } from './components/songs-list/song-item/song-item.component';
import { ErrorComponent } from './components/error/error.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { AllSongsComponent } from './components/all-songs/all-songs.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AuthService} from "./services/auth.service";

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListModule,
    BorderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
