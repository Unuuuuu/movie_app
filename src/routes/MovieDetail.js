import React, { Component } from "react";

class MovieDetail extends Component {
  componentDidMount() {
    const {
      history,
      location: { state },
    } = this.props;
    if (state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;

    if (state === undefined) {
      return null;
    }

    return (
      <div className="movie-detail">
        <img
          className="movie-detail__img"
          src={state.imageUrl}
          alt={state.title}
          title={state.title}
        />
        <div className="movie-detail__data">
          <h1 className="movie-detail__title">{state.title}</h1>
          <span className="movie-detail__year">{state.year}</span>
          <p className="movie-detail__summary">{state.summary}</p>
          <ul className="genres">
            {state.genres.map((genre, idx) => (
              <li key={idx} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
