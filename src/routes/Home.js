import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const Loader = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const Movies = styled.div`
  width: 100%;
  max-width: 67.5em;
  display: flex;
  flex-wrap: wrap;
`;

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({
      isLoading: false,
      movies,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <Container>
        {isLoading ? (
          <Loader>
            <span>Loading...</span>
          </Loader>
        ) : (
          <Movies>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                imageUrl={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </Movies>
        )}
      </Container>
    );
  }
}

export default Home;
