import { Component, OnInit } from '@angular/core';
import { TMBDmoviesService } from '@services/tmbdmovies.service';
import { MovieListModel } from '@model/movieModels';
import { MainLayoutComponent } from "@layouts/main-layout/main-layout.component";
import { MovieListComponent } from "@pods/movie-list/movie-list.component";

@Component({
	selector: 'app-home-scene',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './home-scene.component.html',
	styleUrls: ['./home-scene.component.scss']
})
export class HomeScene implements OnInit {
	popularMovies: MovieListModel[] = [];
	topRatedMovies: MovieListModel[] = [];

	constructor(private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.loadMovies();
	}

	loadMovies(): void {
		this.movieService.getMoviesByCategory('popular').subscribe({
			next: (movies) => {
				this.popularMovies = movies;
			},
			error: (error) => {
				console.error('Error fetching popular movies:', error);
			},
		});

		this.movieService.getMoviesByCategory('top_rated').subscribe({
			next: (movies) => {
				this.topRatedMovies = movies;
			},
			error: (error) => {
				console.error('Error fetching top-rated movies:', error);
			},
		});
	}
}
