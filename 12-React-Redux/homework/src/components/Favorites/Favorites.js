import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';}
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && 
            this.props.movies.map((movie) => (
              <li key={movie.id}>
                {movie.title}
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
// export default ConnectedList;
