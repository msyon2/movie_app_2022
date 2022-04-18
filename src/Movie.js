import React from 'react';
import PropTypes from 'prop-types';

//정적 data : bringing in 동적 data from App.js
function Movie(){
	return <h1></h1>
}

Movie.propTyes={
	id:PropTypes.number.isRequired, 
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
};

export default Movie;