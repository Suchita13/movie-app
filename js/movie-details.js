import { MovieDetailInfo } from './movie-info.js';
import { prepareCard } from './movie-cards.js';


const API_KEY ='93dc8f056bd26a4e357c936b45bd9e37';

const getmovieDetail = (id) =>{
      const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
      fetch(api)
      .then((movies) => {
            return movies.json();
      }).then((data) => {
            MovieDetailInfo(data);
      });   
}

const fetchSimilarMovie = (id) => {
const similarMovieApi = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
      fetch(similarMovieApi)
      .then((res)=>res.json())
      .then((result)=>{
          prepareCard(result,0);
      })
      .catch(()=>{
            console.log('cannot fetch data.');
      })
}

const url = window.location.href;
const movie_id = url.split('=')[1];
getmovieDetail(movie_id);
fetchSimilarMovie(movie_id);