import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SongsComponent } from './components/songs/songs.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { GenreFunkComponent } from './components/genre-funk/genre-funk.component';
import { GenreSoulComponent } from './components/genre-soul/genre-soul.component';
import { GenreJazzComponent } from './components/genre-jazz/genre-jazz.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'funk', component: GenreFunkComponent},
  {path: 'soul', component: GenreSoulComponent},
  {path: 'jazz', component: GenreJazzComponent}
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
