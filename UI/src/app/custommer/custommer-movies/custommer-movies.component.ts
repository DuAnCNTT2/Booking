import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie';
import { fakeMovies } from 'src/app/fake-movie';

@Component({
  selector: 'app-custommer-movies',
  templateUrl: './custommer-movies.component.html',
  styleUrls: ['./custommer-movies.component.css']
})
export class CustommerMoviesComponent implements OnInit {
  movie: Movie = {
    name: 'Aquaman: Đế Vương Atlantis',
    image: '../../../assets/images/aquaman.jpg',
    director: ['James Wan'],
    cast: ['Jason Momoa', 'Amber Heard', 'Patrick Wilson'],
    genre: ['Hành Động'],
    release_date: null,
    running_time: 145,
    description: 'Câu chuyện của Đế Vương Atlantis tiếp nối sau những sự kiện xảy ra trong Justice League – Liên Minh Công Lý.',
    trailer: 'https://www.youtube.com/watch?v=iMbzy-_LPqw',
    disable: false,
  };

  movies = fakeMovies;

  constructor() { }

  ngOnInit() {
  }

}
