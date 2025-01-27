import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActorModel } from '@model/actorsModel';
import { TMBDmoviesService } from '@services/tmbdmovies.service';

@Component({
	selector: 'app-casting-list',
	standalone: true,
	imports: [NgFor],
	templateUrl: './casting-list.component.html',
	styleUrl: './casting-list.component.scss'
})
export class CastingListComponent implements OnInit {

	@Input() movieId!: number;

	casting!: ActorModel[];

	constructor(private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.movieService.getCastingFromMovie(this.movieId).subscribe({
			next: (casting) => {
				this.casting = casting;
			},
			error: (error) => console.error('Error fetching casting:', error),
		}
		);
	}
}
