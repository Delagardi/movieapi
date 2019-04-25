import axios from 'axios';

export default class MovieServiceAPI {
  _apiBase = 'https://api.themoviedb.org/3/';
  _apiKey = '5874acfd11651a28c55771624f7021f4';
  apiUrn = `?api_key=${this._apiKey}`;

  // TODO: what for this shit here?
  // getResource = async () => {
  //   const urn = 'genre/movie/list';

  //   const response = axios
  //     .get(`${this._apiBase}${this.urn}${this.apiUrn}`)
  //     .then( (response) => {
  //       if (response.status !== 200) {
  //         throw new Error(response.status);
  //       }
  //     })
  //     .catch( (error) => console.log(`We couldn't FETCH url ${this._apiBase}${urn}. We get error: ${error}`) );
  // }

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
        return res.data.results;
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
        return res.data.results;
      })
      .catch( (error) => console.log(`We couldn't FETCH url ${this._apiBase}movie/popular. We get error: ${error}`))
    
    return response;
  }

  // TODO:
  // getMoviesByGenre = async (genreID) => {
  //    https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28
  // }


}