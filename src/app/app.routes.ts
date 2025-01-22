import { Routes } from '@angular/router';
import { GenreComponent } from '@scenes/genre/genre.component';
import { MovieDetailScene, HomeScene } from '@scenes/index';

export const routes: Routes = [
	{ path: '', component: HomeScene },
	{ path: 'movie/:id', component: MovieDetailScene },
	{ path: 'genre/:id', component: GenreComponent }
];
