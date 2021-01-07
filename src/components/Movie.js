import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  padding: 1em;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 1em;
  border: 1px solid black;
  background-color: white;
`;

const Poster = styled.img`
  position: relative;
  top: -2em;
  height: 20em;
  margin-right: 1em;
  object-fit: cover;
  border: 1px solid black;
`;

const Info = styled.div``;

const Movie = ({ id, title, year, summary, imageUrl, genres }) => {
  return (
    <Container>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            summary,
            imageUrl,
            genres,
          },
        }}
      >
        <Wrapper>
          <Poster src={imageUrl} alt={title} title={title} />
          <Info>
            <h1 className="movie__title">{title}</h1>
            <span className="movie__year">{year}</span>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
            <ul className="genres">
              {genres.map((genre, idx) => (
                <li key={idx} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </Info>
        </Wrapper>
      </Link>
    </Container>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
