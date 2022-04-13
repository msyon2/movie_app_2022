import React from 'react'; 

/* function Fruit(props) {
  console.log(props);
	return (
    <h2>Love Me { props.fav }</h2>
  )
} */

function Fruit({fav}) {
  return <h2>Love Me {fav} </h2> 
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Fruit fav='Pom' />
      <Fruit fav='apricot' />
      <Fruit fav='papaya' />
      <Fruit fav='pomelo' />
    
    </div>
  );
}

export default App;