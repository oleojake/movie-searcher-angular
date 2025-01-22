import { Component, OnInit, } from '@angular/core';
import { MovieDetailModel } from '@model/movieModels';
import { ActivatedRoute } from '@angular/router';
import { TMBDmoviesService } from '@services/tmbdmovies.service';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component'
import { MovieDetailsInfoComponent } from "./components/movie-details-info/movie-details-info.component";
@Component({
	selector: 'app-movie-detail-scene',
	standalone: true,
	imports: [MainLayoutComponent, MovieDetailsInfoComponent],
	templateUrl: './movie-detail-scene.component.html',
	styleUrl: './movie-detail-scene.component.scss'
})
export class MovieDetailScene implements OnInit {
	movieId!: number;
	movieDetails!: MovieDetailModel;

	constructor(
		private route: ActivatedRoute,
		private movieService: TMBDmoviesService
	) { }

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.movieId = +params['id'];
			this.fetchMovieDetails();
		});
	}

	fetchMovieDetails(): void {
		this.movieService.getMovieDetails(this.movieId).subscribe({
			next: (details) => {
				this.movieDetails = details,
					console.log(this.movieDetails)
			},
			error: (error) => console.error('Error fetching movie details:', error),
		});
	}
}
