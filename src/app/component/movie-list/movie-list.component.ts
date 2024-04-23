import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = []; 
  searchTitle: string = '';
  searchYear: string = '';  

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {

    this.movieService.getMovieList().subscribe(movies => {
      this.movies = movies;
      this.searchByFilter();
    });
  }


  searchByFilter(): void {
    this.filteredMovies = this.movies.filter((movie: Movie) =>
      movie?.title?.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
      this.filterByRealeaseYear(movie?.release_date)
    );
  }

  filterByRealeaseYear(releaseDate?: string): boolean {
    if (!this.searchYear || !releaseDate) {
      return true; 
    }

    const releaseDateYear = new Date(releaseDate).getFullYear().toString();
    return releaseDateYear.includes(this.searchYear);
  }


}



