import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieListModel } from '../../model/movieModels';
import { NgFor } from '@angular/common';
import { TMBDmoviesService } from '../../services/tmbdmovies.service';
import { RouterLink } from '@angular/router';


@Component({
	selector: 'app-movie-list',
	standalone: true,
	imports: [MovieCardComponent, NgFor, RouterLink],
	templateUrl: './movie-list.component.html',
	styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {
	movies: MovieListModel[] = [];

	constructor(private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.movieService.getPopularMovies().subscribe({
			next: (movies) => {
				this.movies = movies;
				console.log(this.movies);
			},
			error: (error) => {
				console.error('Error fetching movies:', error);
			},
		});
	}
}
