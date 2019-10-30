var movieDisplayList  = (function(movieDisplayList){

      /*latest movies function*/
	movieDisplayList.fetchLatest = (url,movieListNode) => {
      fetch(url).then((res)=>res.json()).then(function(result){
      	//console.log(movieListNode);
      	let card = result.results.slice(0,4).map(movies.prepareCard);
                        console.log(card);
        movieListNode.innerHTML = movieListNode.innerHTML + card.join(' ');
      });

	}

      /*trending movies function*/
	movieDisplayList.fetchTrending = (url,movieListNode) => {
      fetch(url).then((res)=>res.json()).then(function(result){
      	//console.log(result);
      	let card = result.results.slice(0,4).map(movies.prepareCard);
      	movieListNode.innerHTML = movieListNode.innerHTML + card.join(' ');
      });

	}

      /*most watched movies function*/
	movieDisplayList.fetchMostWatched = (url,movieListNode) => {
      fetch(url).then((res)=>res.json()).then(function(result){
      	//console.log(result);
      	let card = result.results.slice(0,4).map(movies.prepareCard);
      	movieListNode.innerHTML = movieListNode.innerHTML + card.join(' ');
      });

	}

	movieDisplayList.fetchAllData = (latestUrl,trendingUrl,mostWatchedUrl,latestMovieNode,trendingMovieNode,mostWatchedMoviesNode) => {
 		movieDisplayList.fetchLatest(latestUrl,latestMovieNode);
 		movieDisplayList.fetchTrending(trendingUrl,trendingMovieNode);
 		movieDisplayList.fetchMostWatched(mostWatchedUrl,mostWatchedMoviesNode);		
	}

	return movieDisplayList;	
})(movieDisplayList || {});
const latestUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=93dc8f056bd26a4e357c936b45bd9e37&language=en-US&include_adult=false';
const trendingUrl ='https://api.themoviedb.org/3/trending/movie/week?api_key=93dc8f056bd26a4e357c936b45bd9e37';
const mostWatchedUrl ='https://api.themoviedb.org/3/movie/popular?api_key=93dc8f056bd26a4e357c936b45bd9e37&language=en-US&page=1';

const latestMovieNode = dom.findByClass('latest-movies')[0];

const trendingMovieNode = dom.findByClass('trending-movies')[0];

const mostWatchedMoviesNode = dom.findByClass('most-watched-movies')[0];


movieDisplayList.fetchAllData(latestUrl,trendingUrl,mostWatchedUrl,latestMovieNode,trendingMovieNode,mostWatchedMoviesNode);


//console.log(movieDisplayList);
