import { Routes } from '@angular/router';
import { MovieDetailScene, HomeScene } from '@scenes/index';

export const routes: Routes = [
	{ path: '', component: HomeScene },
	{ path: 'movie/:id', component: MovieDetailScene },
];
