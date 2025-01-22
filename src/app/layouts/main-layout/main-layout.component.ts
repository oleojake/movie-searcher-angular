import { Component, OnInit } from '@angular/core';
import { FooterComponent, DesktopHeaderComponent, MobileHeaderComponent } from './components/index';
import { ResponsiveService } from '@services/responsive.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieGenres } from '@model/genresModel';
import { TMBDmoviesService } from '@services/tmbdmovies.service';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	imports: [DesktopHeaderComponent, FooterComponent, MobileHeaderComponent, CommonModule],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
	isMobile$!: Observable<boolean>;
	genres: MovieGenres[] = [];

	constructor(private responsiveService: ResponsiveService, private movieService: TMBDmoviesService) { }

	ngOnInit(): void {
		this.isMobile$ = this.responsiveService.isMobile$;
		this.movieService.getGenres().subscribe({
			next: (genres) => {
				this.genres = genres;
			},
			error: (error) => console.error('Error fetching genres:', error),
		});
	}

}
