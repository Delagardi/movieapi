const initialState = {
  movies: [],
  genres: [],
  genreChoosed: null,
  totalResults: null,
  total_pages: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        // loading: true,
        // error: null
      }
    
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages
      }
    
    case 'FETCH_GENRES_REQUEST':
      return {
        ...state,
        // loading: true,
        // error: null
      }
    
    case 'FETCH_GENRES_SUCCESS':
      return {
        ...state,
        genres: action.payload
      }
    
    case 'GET_MOVIES_BY_GENRE':
    console.log('we are at reducer!');
      return {
        ...state,
        genreChoosed: action.payload
      }

    default:
      return state;
  }
}

export default reducer;