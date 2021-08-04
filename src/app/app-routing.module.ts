import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {ErrorComponent} from "./components/error/error.component";
import {SongsListComponent} from "./components/songs-list/songs-list.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'genre/:genreName', component: SongsListComponent},
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
