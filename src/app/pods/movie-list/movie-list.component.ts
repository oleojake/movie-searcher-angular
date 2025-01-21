import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieListModel } from '../../model/movieModels';
import { NgFor } from '@angular/common';
import { TMBDmoviesService } from '../../services/tmbdmovies.service';
import { RouterLink } from '@angular/router';
import { MovieListFilter } from '@model/listsFilters';


@Component({
	selector: 'app-movie-list',
	standalone: true,
	imports: [MovieCardComponent, NgFor, RouterLink],
	templateUrl: './movie-list.component.html',
	styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {
	@Input()
	filter!: MovieListFilter;
	headerTitle!: string;
	movies: MovieListModel[] = [];

	constructor(private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.setHeaderTitle();
		this.loadMovies();
	}


	private setHeaderTitle(): void {
		switch (this.filter) {
			case 'popular':
				this.headerTitle = 'Popular Movies';
				break;
			case 'top_rated':
				this.headerTitle = 'Top Rated Movies';
				break;
			default:
				this.headerTitle = 'Movies';
		}
	}

	private loadMovies(): void {
		this.movieService.getMoviesByCategory(this.filter).subscribe({
			next: (movies: MovieListModel[]) => {
				this.movies = movies;
			},
			error: (error: any) => {
				console.error('Error fetching movies:', error);
			},
		});
	}
}
