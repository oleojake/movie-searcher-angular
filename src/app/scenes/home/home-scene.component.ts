import { Component } from '@angular/core';
import { MainLayoutComponent } from "@layouts/main-layout/main-layout.component";
import { MovieListComponent } from "@pods/movie-list/movie-list.component";

@Component({
	selector: 'app-home-scene',
	standalone: true,
	imports: [MainLayoutComponent, MovieListComponent],
	templateUrl: './home-scene.component.html',
	styleUrl: './home-scene.component.scss'
})
export class HomeScene {

}
