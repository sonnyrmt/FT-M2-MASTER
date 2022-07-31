import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.getMovieDetail(id);
  }

  render() {
    const { Title, Year, Rated, Released, Director ,Actors, Plot, Poster ,Genre , Runtime} = this.props.movieDetail;

    return (
      <div className="movie-detail">
        Detalle de la pelicula
        <h3>Movie: {Title}</h3>
        <p>Year: {Year}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movie) => dispatch(getMovieDetail(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
