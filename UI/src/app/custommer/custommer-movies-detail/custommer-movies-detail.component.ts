import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie';

// route
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custommer-movies-detail',
  templateUrl: './custommer-movies-detail.component.html',
  styleUrls: ['./custommer-movies-detail.component.css']
})
export class CustommerMoviesDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(
      `this.route.snapshot.paramMap = ${JSON.stringify(
        this.route.snapshot.paramMap
      )}`
    );
    // call service from id
    this.movieService
      .getMovieFromId(id)
      .subscribe(movie => this.movie = movie);
  }

  getBack(): void {
    this.location.back();
  }
  getYoutubeURL(item: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(item);
  }
}
