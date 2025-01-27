import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListModel } from '@model/movieModels';
import { TMBDmoviesService } from '@services/tmbdmovies.service';
import { MainLayoutComponent } from "@layouts/main-layout/main-layout.component";
import { MovieListComponent } from "@pods/movie-list/movie-list.component";

@Component({
	selector: 'app-search-scene',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './search-scene.component.html',
	styleUrl: './search-scene.component.scss'
})
export class SearchSceneComponent implements OnInit {
	movies: MovieListModel[] = [];
	searchTerm!: string;

	constructor(private route: ActivatedRoute, private tmdbService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.searchTerm = params['terms'] || '';
			if (this.searchTerm) {
				this.performSearch(this.searchTerm);
			}
		});
	}

	performSearch(terms: string): void {
		this.tmdbService.searchMovies(terms).subscribe({
			next: (movies) => {
				this.movies = movies;
			},
			error: (err) => {
				console.error('Error fetching search results:', err);
			}
		});
	}
}