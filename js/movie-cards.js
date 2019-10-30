var movies = (function(movies){

/*movie cards function*/
movies.prepareCard = (movies) => {
	console.log(movies);
	//debugger;
	var average = Math.floor(movies.vote_average/2);
	var i=1;
	let cardTemplate = `<section class='movielist'>
							<figure>
								<img src='https://image.tmdb.org/t/p/w500/${movies.poster_path}' class='movie-img'>
							</figure>
							<span class='left-span'>
								<strong>${movies.title}</strong>
							</span>
							<span class='right-span fa fa-heart-o fa-lg' style='display:none;'>
							</span>
							<span class='right-span fa fa-heart fa-lg' style='display:none;'>
							</span>
							<p class='clearfix'>${movies.genre_ids}</p>`;
						while(i <= 5){
							if(i<=average){
		cardTemplate =  cardTemplate + `<i class='fa fa-star star'></i>`;
							}else{
		cardTemplate =  cardTemplate + `<i class='fa fa-star-o star'></i>`;
							}
						i++;	
						}	
		cardTemplate =  cardTemplate+`
							<a href='#'>Show more</a>
		</section>`;	

  return cardTemplate;
}	

/*movie generes id function*/

/*movies.getMovieGeneres = () =>{
	    console.log('abc');
		const url ='https://api.themoviedb.org/3/genre/movie/list?api_key=93dc8f056bd26a4e357c936b45bd9e37&language=en-US';
	    fetch(url).then((res)=>res.json()).then(function(result){
         console.log(genre_ids);
       });
}*/

return movies;


})(movies || {});
