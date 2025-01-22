import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class MovieListComponent implements OnInit, OnChanges {
	@Input()
	filter!: string;

	genreName!: string;

	headerTitle!: string;
	movies: MovieListModel[] = [];


	constructor(private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.getGenres();
		this.loadMovies();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['filter']) {
			this.getGenres();
			this.loadMovies();
		}
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
				this.headerTitle = `${this.genreName} Movies`;
		}
	}

	private loadMovies(): void {
		if (this.filter === 'popular' || this.filter === 'top_rated') {
			this.movieService.getMoviesByCategory(this.filter).subscribe({
				next: (movies: MovieListModel[]) => {
					this.movies = movies;
				},
				error: (error: any) => {
					console.error('Error fetching movies:', error);
				},
			});
		} else {
			this.movieService.getMoviesByGenre(this.filter).subscribe({
				next: (movies: MovieListModel[]) => {
					this.movies = movies;
				},
				error: (error: any) => {
					console.error('Error fetching movies by genre:', error);
				},
			});
		}
	}

	private getGenres(): void {
		this.movieService.getGenres().subscribe({
			next: (genres) => {
				const genre = genres.find((g) => g.id === +this.filter);
				this.genreName = genre ? genre.name : 'Unknown Genre';
				this.setHeaderTitle();
			},
			error: (error) => {
				console.error('Error fetching genres:', error);
			},
		});
	}
}
