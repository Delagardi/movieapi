import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import { ProviderMovieAPI } from './components/context-movie-api';
import MovieServiceAPI from './service';


const movieService = new MovieServiceAPI();

ReactDOM.render(
  <Provider store={store}>
    <ProviderMovieAPI value={movieService}>
      <App />
    </ProviderMovieAPI>
  </Provider>, 
document.getElementById('root'));
