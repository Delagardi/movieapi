import React from 'react';
import { ConsumerMovieAPI } from '../context-movie-api';

const withMovieAPI = () => (Wrapped) => {
  return (props) => {
    return (
      <ConsumerMovieAPI>
        {
          (movieService) => {
            return (
              <Wrapped
                {...props}
                movieService={movieService}
              />
            )
          }
        }
      </ConsumerMovieAPI>
    )
  }
}

export default withMovieAPI;