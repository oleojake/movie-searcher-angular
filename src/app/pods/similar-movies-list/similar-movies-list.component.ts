import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieListModel } from '@model/movieModels';
import { MovieCardComponent } from '@pods/movie-card/movie-card.component';

@Component({
	selector: 'app-similar-movies-list',
	standalone: true,
	imports: [NgFor, RouterLink, CommonModule],
	templateUrl: './similar-movies-list.component.html',
	styleUrl: './similar-movies-list.component.scss'
})
export class SimilarMoviesListComponent {
	@Input() similarMovies!: MovieListModel[];

}
