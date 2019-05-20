import { observable, action } from "mobx";
import { BaseStore } from './base-store';
import axios from 'axios';

export class MoviesStore extends BaseStore {
	@observable movies = [];

	getMovieDetails = (id) =>  this.movies.find(movie => movie.id === Number(id));

	@action async getMovies() {
		const result = await axios(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=1`,
		);
		const movies = [...result.data.results];
		const page = result.data.page;
		this.update({movies, page});
	}
}