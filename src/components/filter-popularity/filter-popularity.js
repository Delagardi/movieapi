import React, { Component } from 'react';
import { connect } from 'react-redux';
import withMovieAPI from '../hoc';
import { moviesLoadingAction } from '../../actions';

import './filter-popularity.css';

class FilterPopularity extends Component {
  onFilterPopularityClick = () => {
      
  }

  render() {
    return (
      <div className="filter-popularity-list">
        <span className="filter-popularity-item">Most popular today</span>
        <span className="filter-popularity-item">Top rated</span>
        <span className="filter-popularity-item">Latest. Most newly created movie.</span>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

// TODO: ???
// const mapDispatchToProps = (dispatch, ownProps) => {
//   const { movieService } = ownProps;
//   return {
//     moviesLoading: (id) => {
//       movieService
//         .getMovies(id)
//         .then( (movies) => dispatch(moviesLoadingAction(movies)))
//         //TODO: remove console.log
//         .catch( (error) => console.log(error) )
//     }
//   }
// }

export default withMovieAPI()(connect(mapStateToProps, mapDispatchToProps)(FilterPopularity));