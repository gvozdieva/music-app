import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {SongsComponent} from "./components/songs/songs.component";
import {AuthorsComponent} from "./components/authors/authors.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'genre/:genreName', component: SongsComponent},
  {path: 'authors', component: AuthorsComponent}
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
