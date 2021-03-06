import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"
import {Link} from "react-router-dom";

//정적 data : bringing in 동적 data from App.js
function Movie({title,year,summary,poster,genres}){
	return (
		<div className='movie__data'>
			<Link to={{ pathname:"/movie-detail", state:{year,title,summary,poster,genres} }}>
				<img src={poster} alt={title} title={title}/>
				<h3 className='movie__title'>{title}</h3>
				<h5 className='movie__year'>{year}</h5>
				<ul className='movie__genres'>
					{genres.map((genre, index)=>{
						return <li key={index} className='movie_genre'>{genre}</li>
					})}
				</ul>
				<p className='movie__summary'>{summary.slice(0,180)}...</p>
			</Link>
		</div>
	)
}

Movie.propTyes={
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
	genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Movie;