import React, { Component } from 'react';
import { connect } from 'react-redux';
import withMovieAPI from '../hoc';
import { moviesRequestAction, moviesLoadingAction } from '../../actions';
import { imageBaseURL, imageSize } from '../../config';

import './movie-list.css';

class MovieList extends Component {
  componentDidMount() {
    this.props.moviesRequest();
    this.props.moviesLoading();
  }

  render() {
    const { movies } = this.props;

    const movieList = movies.map( (movie) => {
      const { title, id, poster_path, original_title } = movie;

      return (
        <div className="movie-list-card" key={id}>
          <a href="somefilm1">
            <div className="movie-list-card__img-wrapper">
              <img className="movie-list-card__img" src={`${imageBaseURL}${imageSize}${poster_path}`} alt={original_title}/>
            </div>
            <span className="movie-list-title">{title}</span>
          </a>
        </div>
      );
    })

    return (
      <div className="movie-list">
        {movieList}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { movieService } = ownProps;
  return {
    moviesRequest: () => dispatch(moviesRequestAction()),
    moviesLoading: () => {
      movieService
        .getMovies()
        .then( (movies) => dispatch(moviesLoadingAction(movies)))
        //TODO: remove console.log
        .catch( (error) => console.log(error) )
    } 
  }
}

export default withMovieAPI()(connect(mapStateToProps, mapDispatchToProps)(MovieList));