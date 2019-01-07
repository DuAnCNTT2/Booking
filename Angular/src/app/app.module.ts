import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { FilmComponent } from './FilmComponent/film.component'; //Thêm dòng khai báo
import { NavigationComponent } from './navigation/navigation.component';
import { NowshowingComponent } from './nowshowing/nowshowing.component';
import { TheaterComponent } from './theater/theater.component';
import { LoginComponent } from './login/login.component';
import { SeatComponent } from './seat/seat.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';//import Routes từ module @angular/router
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { GoldcinemaComponent } from './goldcinema/goldcinema.component';
import { SliderComponent } from './slider/slider.component'; 

//Khai báo một constant chứa các route của app
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'film', component: FilmComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'nowshowing', component: NowshowingComponent },
  { path: 'theater', component: TheaterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seat', component: SeatComponent },
  { path: 'user', component: UserComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'goldcinema', component: GoldcinemaComponent },

];
//Import RouterModule vào import của app.module


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    NavigationComponent,
    NowshowingComponent,
    TheaterComponent,
    LoginComponent,
    SeatComponent,
    IndexComponent,
    UserComponent,
    DetailComponent,
    GoldcinemaComponent,
    SliderComponent,//Thêm dòng khai báo
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
