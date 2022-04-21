import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//동적 data uses class & state
class Home extends React.Component {
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
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //axios functions same as fetch in js
    //console.log(movies.data.data.movies[0].title);
    this.setState({ movies, isLoading: false });
    //this.setSate({ movies: movies });
    //if the name of key & value are the same, you can write once
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {/* condition ? execution when true: execusion when false */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie //Movie is a component
                //props are listed below as follows
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
