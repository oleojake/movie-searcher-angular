import { Component, Input } from '@angular/core';
import { MovieListModel } from '../../model/movieModels';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-movie-card',
	standalone: true,
	imports: [MatIcon, NgClass],
	templateUrl: './movie-card.component.html',
	styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

	@Input()
	movie: MovieListModel = {
		id: 0,
		title: '',
		year: '',
		plot: '',
		posterSrc: '',
		rating: ''
	};

	@Input()
	category!: string;

}
