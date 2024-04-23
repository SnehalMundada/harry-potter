import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieDetails } from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = '/movies';

  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.apiUrl + "/" + id);

  }
}
