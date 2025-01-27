import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMBDmoviesService } from '@services/tmbdmovies.service';
import { MovieListComponent } from "../../pods/movie-list/movie-list.component";
import { MainLayoutComponent } from "../../layouts/main-layout/main-layout.component";
import { Subscription } from 'rxjs';
import { MovieListModel } from '@model/movieModels';

@Component({
	selector: 'app-genre',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './genre.component.html',
	styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit, OnDestroy {
	genreId!: string;
	genreName!: string;
	movies: MovieListModel[] = [];
	private routeSub!: Subscription;

	constructor(private route: ActivatedRoute, private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.routeSub = this.route.paramMap.subscribe((params) => {
			this.genreId = params.get('id') || '';
			this.loadMoviesByGenre(this.genreId);
		});
	}

	ngOnDestroy(): void {
		if (this.routeSub) {
			this.routeSub.unsubscribe();
		}
	}

	loadMoviesByGenre(genreId: string) {
		this.movieService.getGenres().subscribe({
			next: (genres) => {
				const genre = genres.find((g) => g.id === +genreId);
				this.genreName = genre ? genre.name : 'Unknown Genre';
				this.movieService.getMoviesByGenre(genreId).subscribe({
					next: (movies: MovieListModel[]) => {
						this.movies = movies;
					},
					error: (error: any) => {
						console.error('Error fetching movies by genre:', error);
					},
				});
			},
			error: (error) => {
				console.error('Error fetching genres:', error);
			},
		});
	}
}
