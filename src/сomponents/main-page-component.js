import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('movieStore')
@observer
class MainPageComponent extends Component {

  componentDidMount() {
    this.props.movieStore.getMovies();
  }

  render() {
    const movies = [...this.props.movieStore.movies];
    return (
      <React.Fragment>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid black', marginBottom: 10 }}>
            <Link to={`/desc${movie.id}`}>
              <div>{movie.title}</div>
              <img src={`http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`} alt={movie.title} />
            </Link>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default MainPageComponent;