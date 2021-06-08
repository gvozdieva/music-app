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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SongsComponent,
    AuthorsComponent,
    GenreFunkComponent,
    GenreSoulComponent,
    GenreJazzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
