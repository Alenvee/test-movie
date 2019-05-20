import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action, toJS } from 'mobx';

@inject('movieStore')
@observer
class MovieDetail extends Component {

	@observable movie = null;


	getMovieDetails = () => {
		console.log(this.props);
		const {match: { params: { id } }, movieStore} = this.props;
		const movie = movieStore.getMovieDetails(id);
		return movie;
	}

	componentDidMount() {
		const movie = this.getMovieDetails();
		this.movie = { ...movie };
	}

	render() {
		console.log( toJS(this.movie));
		return !!this.movie ? (
			<div>
				<div>{this.movie.title}</div>
        		<img src={`http://image.tmdb.org/t/p/w342/${this.movie.backdrop_path}`} alt={this.movie.title} />
                <div>{this.movie.overview}</div>
                <div>Vote {this.movie.vote_average} by {this.movie.vote_count} users</div>
			</div>
		): <div>Loading...</div>;
	}
}

export default MovieDetail;