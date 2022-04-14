import React from "react";
import PropTypes from 'prop-types';

/* function Fruit(props) {
  console.log(props);
	return (
    <h2>Love Me { props.fav }</h2>
  )
} */

//component
function Fruit({ name, picture, rating }) {
  return (
    <div>
      <h2>Love Me {name} </h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name}/>

    </div>
  );
}
const fruitILike = [
  //{key키:value값},
  {
    id:1,
    name: "banana",
    image: "http://qwerew.cafe24.com/images/banana.png",
    rating:3.5,
  },
  {
    id:2,
    name: "orange",
    image: "http://qwerew.cafe24.com/images/orange.png",
    rating:4.5,
  },
  {
    id:3,
    name: "apple",
    image: "http://qwerew.cafe24.com/images/apple.png",
    rating:4.8,
  },
  {
    id:4,
    name: "melon",
    image: "http://qwerew.cafe24.com/images/melon.jpg",
    rating:3.8,
  },
];

/* method 3
function renderFruit(dish){
  return<Fruit key={dish.id} name={dish.name} picture={dish.image}/>
} */

function App() {
  return (
    <div>
      {fruitILike.map((dish)=>(
        <Fruit key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}

      {/* method 3
      {fruitILike.map(renderFruit)} */}
      
      {/* method 2
      {fruitILike.map((dish) => (
        <Fruit key={dish.id} name={dish.name} picture={dish.image} />
      ))} */}

      {/* {fruitILike.map(function(dish){
          return <Fruit name= {dish.name}/> 
      })}
 */}
    </div>
  );
}

/* prototype = props의 data type 검사 */
Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;
