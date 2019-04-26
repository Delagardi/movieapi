import axios from 'axios';

export default class MovieServiceAPI {
  _apiBase = 'https://api.themoviedb.org/3/';
  _apiKey = '5874acfd11651a28c55771624f7021f4';
  apiUrn = `?api_key=${this._apiKey}`;

  getGenres = async (url) => {
    // TODO: fix url variable AND fix url's
    url = 'genre/movie/list';

    const response = await axios
      .get(`${this._apiBase}genre/movie/list?api_key=${this._apiKey}`)
      .then( (res) => {
        return res.data.genres;
      })
      .catch( (error) => console.log(`We catch error: ${error}`) );
    
    return response;
  }

  getMovies = async (genreID) => {
    const response = await axios
      .get(
        `${this._apiBase}discover/movie${this.apiUrn}`, 
        {
          params: {
            with_genres: genreID
          }
        })
      .then( (res) => {
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        return res.data;
      })
      .catch( (error) => console.log(`We couldn't FETCH url ${this._apiBase}discover/movie. We get error: ${error}`) );

    console.log('getMovies:');
    console.log(response);
    
    return response;
  }

  getPopularMovies = async (filterBy) => {
    console.log(filterBy);

    const response = await axios
      .get(`${this._apiBase}movie/${filterBy}${this.apiUrn}`)
      .then( (res) => {
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        return res.data;
      })
      .catch( (error) => console.log(`We couldn't FETCH url ${this._apiBase}movie/popular. We get error: ${error}`))
    
    return response;
  }

  // https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&page=1&primary_release_date.gte=1874-12-09&primary_release_date.lte=2019-04-24


}