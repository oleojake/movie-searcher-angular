import { Component, Input } from '@angular/core';
import { MovieListModel } from '../../model/movieModels';

@Component({
	selector: 'app-movie-card',
	standalone: true,
	imports: [],
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

}
