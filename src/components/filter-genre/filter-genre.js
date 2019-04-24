import React, { Component } from 'react';
import { connect } from 'react-redux';
import { genresRequestAction, genresLoadingAction, moviesRequestAction, moviesLoadingAction } from '../../actions';
import withMovieAPI from '../hoc';

import './filter-genre.css'

class FilterGenre extends Component {
  componentDidMount() {
    this.props.genresRequest();
    this.props.genresLoading();
  }

  onGenreClick = (id) => {
    this.props.moviesRequest();
    this.props.moviesLoading(id);    
  }

  render() {
    const { genres } = this.props;
    const genresList = genres.map( (genre) => {
      const { id, name } = genre;

      return (
        <span 
          key={id} 
          className="filter-genre-item"
          onClick={() => this.onGenreClick(id)}>
          {name}
        </span>
      );
    })
    return (
      <div className="filter-genre">
        {genresList}
      </div>
    )
  }
}

const mapStateToProps = ({ genres, genreChoosed }) => {
  return {
    genres,
    genreChoosed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { movieService } = ownProps;

  return {
    genresRequest: () => dispatch(genresRequestAction()),
    genresLoading: () => {
      movieService
        .getGenres()
        .then( (genres) => {
          return dispatch(genresLoadingAction(genres))} )
        
        //TODO: remove console.log
        .catch( (error) => console.log(error) )
    },
    moviesRequest: () => dispatch(moviesRequestAction()),
    moviesLoading: (id) => {
      movieService
        .getMovies(id)
        .then( (movies) => dispatch(moviesLoadingAction(movies)))
        //TODO: remove console.log
        .catch( (error) => console.log(error) )
    }
  }
}

export default withMovieAPI()(connect(mapStateToProps, mapDispatchToProps)(FilterGenre));