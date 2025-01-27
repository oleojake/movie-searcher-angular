import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { MovieGenre } from '@model/genresModel';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-mobile-header',
	standalone: true,
	imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule, RouterLink, NgFor, FormsModule],
	templateUrl: './mobile-header.component.html',
	styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

	@Input()
	genres: MovieGenre[] = [];

	searchTerm: string = '';

	constructor(private router: Router) { }

	onSearch(event: Event): void {
		event.preventDefault();
		if (this.searchTerm.trim()) {
			this.router.navigate(['/search'], { queryParams: { terms: this.searchTerm } });
		}
	}

}
