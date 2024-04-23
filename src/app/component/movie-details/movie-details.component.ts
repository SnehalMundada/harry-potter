import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetails } from '../models/movie-details';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movieDetails: MovieDetails | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService,
    private ChangeDetectorRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loading = true;

    const movieId = this.route.snapshot.paramMap.get('id') || '';
    
    this.movieService.getMovieDetails(movieId).subscribe(movie => {
      if (Object.keys(movie ?? {}).length > 0) {
      this.movieDetails = movie;
      this.ChangeDetectorRef.detectChanges();
      this.loading = false;
      }
    });
  }

  backToHomePage(): void{
    this.router.navigate(['/movies']);
  }
}
