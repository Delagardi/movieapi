import React, { Component } from 'react';
import { connect } from 'react-redux';
import withMovieAPI from '../hoc';
import { moviesLoadingAction } from '../../actions';

import './filter-popularity.css';

class FilterPopularity extends Component {
  onFilterPopularityClick = (filterBy) => {
    this.props.moviesLoading(filterBy);
  }

  onFilterTopRatedClick = (filterBy) => {
    this.props.moviesLoading(filterBy);
  }

  render() {
    return (
      <div className="filter-popularity-list">
        <span 
          className="filter-popularity-item"
          onClick={ () => this.onFilterPopularityClick('popular')}>
          Most popular today
        </span>
        <span 
          className="filter-popularity-item"
          onClick={ () => this.onFilterTopRatedClick('top_rated')}>
          Top rated
        </span>
        <span className="filter-popularity-item">Latest. Most newly created movie.</span>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {}
// }
// // TODO: ???
const mapDispatchToProps = (dispatch, ownProps) => {
  const { movieService } = ownProps;
  return {
    moviesLoading: (filterBy) => {
      movieService
        .getPopularMovies(filterBy)
        .then( (movies) => dispatch(moviesLoadingAction(movies)))
        //TODO: remove console.log
        .catch( (error) => console.log(error) )
    }
  }
}

export default withMovieAPI()(connect(mapStateToProps, mapDispatchToProps)(FilterPopularity));