import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BudgetPipe } from '../pipes/budget.pipe';
import { DurationPipe } from '../pipes/duration.pipe';

@NgModule({
    declarations: [ MovieDetailsComponent, MovieListComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
