import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieDetailModel, MovieListModel } from '@model/movieModels';
import { MovieGenres } from '@model/genresModel';

@Injectable({
	providedIn: 'root'
})
export class TMBDmoviesService {
	private readonly BASE_URL = 'https://api.themoviedb.org/3';
	private readonly API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDMyMjJlYjUxMWM3YmQzZTAzYWIzMDIwODg2YjdjNyIsIm5iZiI6MTczNzM3MTQyMy4zOTEsInN1YiI6IjY3OGUyZjFmOWNiMDcxOWY3NDY0Zjc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw-WkH_McygIyPf6GiHtlebKGhyhHi2hdFjn0hXuiMg';
	private readonly headers = new HttpHeaders({
		accept: 'application/json',
		Authorization: `Bearer ${this.API_KEY}`
	});

	constructor(private http: HttpClient) { }

	private mapMovieForMovieList(movieListData: any): MovieListModel {
		return {
			id: movieListData.id,
			title: movieListData.title,
			year: movieListData.release_date.split('-')[0],
			plot: movieListData.overview,
			posterSrc: `https://image.tmdb.org/t/p/w500${movieListData.poster_path}`,
			rating: movieListData.vote_average.toFixed(1),
		};
	}

	private mapMovieDetail(movieDetailData: any): MovieDetailModel {
		return {
			id: movieDetailData.id,
			title: movieDetailData.title,
			year: movieDetailData.release_date?.split('-')[0] || 'N/A',
			runtime: movieDetailData.runtime ? `${movieDetailData.runtime} min` : 'N/A',
			plot: movieDetailData.overview || 'No plot available.',
			posterSrc: `https://image.tmdb.org/t/p/w500${movieDetailData.poster_path}`,
			rating: movieDetailData.vote_average ? movieDetailData.vote_average.toFixed(1) : 'N/A',
			genres: movieDetailData.genres.map((genre: any) => genre.name),
			backdropSrc: `https://image.tmdb.org/t/p/w1280${movieDetailData.backdrop_path}`,
			tagline: movieDetailData.tagline || '',
			budget: movieDetailData.budget || 0,
			revenue: movieDetailData.revenue || 0,
			homepage: movieDetailData.homepage || '',
			productionCompanies: movieDetailData.production_companies.map((company: any) => company.name).join(', '),
			releaseDate: movieDetailData.release_date || '',
			imdbId: movieDetailData.imdb_id || '',
			status: movieDetailData.status || 'N/A',
		};
	}

	getMoviesByCategory(category: string): Observable<MovieListModel[]> {
		const url = `${this.BASE_URL}/movie/${category}?language=en-US&page=1`;
		return this.http.get<any>(url, { headers: this.headers }).pipe(
			map((response) => response.results.map(this.mapMovieForMovieList).slice(0, 10))
		);
	}

	getMovieDetails(id: number): Observable<MovieDetailModel> {
		return this.http.get<any>(`${this.BASE_URL}/movie/${id}?language=en-US`, { headers: this.headers }).pipe(
			map((raw) => this.mapMovieDetail(raw))
		);
	}

	getGenres(): Observable<MovieGenres[]> {
		return this.http.get<any>(`${this.BASE_URL}/genre/movie/list?language=en-US`, { headers: this.headers }).pipe(
			map((response) => response.genres)
		);
	}
}
