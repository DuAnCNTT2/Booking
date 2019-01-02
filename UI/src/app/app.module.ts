import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CycleSlideComponent } from './custommer/cycle-slide/cycle-slide.component';
import { MovieSelectionComponent } from './custommer/movie-selection/movie-selection.component';
import { CustommerMoviesComponent } from './custommer/custommer-movies/custommer-movies.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustommerMoviesDetailComponent } from './custommer/custommer-movies-detail/custommer-movies-detail.component';
import { MovieService } from 'src/services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { CustommerTheaterComponent } from './custommer/custommer-theater/custommer-theater.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CycleSlideComponent,
    MovieSelectionComponent,
    CustommerMoviesComponent,
    CustommerMoviesDetailComponent,
    CustommerTheaterComponent,
    // AngularFontAwesomeModule
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
