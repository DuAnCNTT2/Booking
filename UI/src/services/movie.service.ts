import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movie';
import { fakeMovies } from 'src/app/fake-movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from '../';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://desktop-1dgo77k.local:3000/movies';
  getMovie(): Observable<Movie[]> {
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(reciveMovie => console.log(`reciveMovie = ${JSON.stringify(reciveMovie)}`)),
      catchError(error => of([]))
    );
  }
  constructor(
    private http: HttpClient,
    // private messageService: MessageService
    ) { }
}
