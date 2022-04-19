import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

//정적 data : bringing in 동적 data from App.js
function Movie({title,year,summary,poster}){
	return (
		<div className='movie__data'>
			<img src={poster} alt={title} title={title}/>
			<h3 className='movie__title'>{title}</h3>
			<h5 className='movie__year'>{year}</h5>
			<p className='movie__summary'>{summary}</p>
		</div>
	)
}

Movie.propTyes={
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
};

export default Movie;