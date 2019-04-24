import React, { Component } from 'react';
import FilterGenre from '../filter-genre';
import FilterPopularity from '../filter-popularity';

import './filters.css';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <h3 className="filters-header">Choose your film by filters:</h3>
        <div className="filters-list">
          <div className="filters-item">
            <span>Genre</span>
            <FilterGenre/>
          </div>
          <div className="filters-item">
            <span>Popularity</span>
            <FilterPopularity/>
          </div>
          <div className="filters-item">
            <span>Release date</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Filters;