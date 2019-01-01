import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-custommer-movies-detail',
  templateUrl: './custommer-movies-detail.component.html',
  styleUrls: ['./custommer-movies-detail.component.css']
})
export class CustommerMoviesDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
