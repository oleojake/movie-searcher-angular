import { Component } from '@angular/core';
import { MainLayoutComponent } from "../../layouts/main-layout/main-layout.component";
import { MovieListComponent } from "../../pods/movie-list/movie-list.component";

@Component({
	selector: 'app-genre',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './genre.component.html',
	styleUrl: './genre.component.scss'
})
export class GenreComponent {

}
