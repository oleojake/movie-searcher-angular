import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMBDmoviesService } from '@services/tmbdmovies.service';
import { MovieListComponent } from "../../pods/movie-list/movie-list.component";
import { MainLayoutComponent } from "../../layouts/main-layout/main-layout.component";
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-genre',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './genre.component.html',
	styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit, OnDestroy {
	genreId!: string;
	private routeSub!: Subscription;

	constructor(private route: ActivatedRoute, private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.routeSub = this.route.paramMap.subscribe((params) => {
			this.genreId = params.get('id') || '';
		});
	}

	ngOnDestroy(): void {
		if (this.routeSub) {
			this.routeSub.unsubscribe();
		}
	}
}
