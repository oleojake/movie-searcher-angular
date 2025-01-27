import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieListModel } from '../../model/movieModels';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
	selector: 'app-movie-list',
	standalone: true,
	imports: [MovieCardComponent, NgFor, RouterLink],
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
	@Input() movies: MovieListModel[] = [];
	@Input() filter!: string;
	searchTerm!: string;

	headerTitle: string = '';

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		if (this.filter === 'search') {
			this.route.queryParams.subscribe(params => {
				this.searchTerm = params['terms'] || '';
				if (this.searchTerm) {
					this.headerTitle = `Search results for "${this.searchTerm}"`;
				}
			});
		} else {
			this.setHeaderTitle();
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['filter']) {
			this.setHeaderTitle();
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
				this.headerTitle = `${this.filter} Movies`;
		}
	}
}
