import React from "react";
import axios from "axios";

//동적 data uses class & state
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //async & await has to be used as a pair
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //axios functions same as fetch in js
    //console.log(movies.data.data.movies[0].title);
    this.setState({ movies , isLoading: false });
    //this.setSate({ movies: movies });
       //if the name of key & value are the same, you can write once
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "Loaded"}
        {/* condition ? execution when true: execusion when false */}
      </div>
    );
  }
}

export default App;
