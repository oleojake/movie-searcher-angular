import { MovieGenre } from "./genresModel";

export interface MovieListModel {
	id: number;
	title: string;
	year: string;
	plot: string;
	posterSrc: string;
	rating: string;
}

export interface MovieDetailModel {
	id: number;
	title: string;
	year: string;
	runtime: string;
	plot: string;
	posterSrc: string;
	rating: string;
	genres: MovieGenre[];
	backdropSrc: string;
	tagline: string;
	budget: number;
	revenue: number;
	homepage: string;
	productionCompanies: string;
	releaseDate: string;
	imdbId: string;
	status: string;
}