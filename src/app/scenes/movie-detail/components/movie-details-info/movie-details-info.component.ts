import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieDetailModel } from '@model/movieModels';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-movie-details-info',
	standalone: true,
	imports: [NgIf, NgFor, MatChip, MatIcon, CommonModule, RouterLink],
	templateUrl: './movie-details-info.component.html',
	styleUrl: './movie-details-info.component.scss'
})
export class MovieDetailsInfoComponent {

	@Input()
	movieDetails!: MovieDetailModel;

}
