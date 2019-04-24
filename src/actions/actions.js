const genresRequestAction = () => {  
  return {
    type: 'FETCH_GENRES_REQUEST',
  }
}

const genresLoadingAction = (genres) => {
  return {
    type: 'FETCH_GENRES_SUCCESS',
    payload: genres
  }
}

const moviesRequestAction = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST'
  }
}

const moviesLoadingAction = (movies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
  }
}

const getMoviesByGenreAction = (genre) => {
  return {
    type: 'GET_MOVIES_BY_GENRE',
    payload: genre
  }
}

export {
  moviesRequestAction,
  genresRequestAction,
  genresLoadingAction,
  moviesLoadingAction,
  getMoviesByGenreAction
}