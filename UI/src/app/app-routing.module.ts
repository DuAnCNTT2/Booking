import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustommerMoviesComponent } from './custommer/custommer-movies/custommer-movies.component';
import { CustommerMoviesDetailComponent } from './custommer/custommer-movies-detail/custommer-movies-detail.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'movies', component: CustommerMoviesComponent },
  { path: 'movies/:id', component: CustommerMoviesDetailComponent }
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
