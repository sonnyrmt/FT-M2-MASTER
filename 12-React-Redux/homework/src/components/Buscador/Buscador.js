import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import s from './Buscador.module.css'
import { Search, StarOutline } from 'iconoir-react'

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.title);
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className={s.swidth}>
        <div className={s.searchContainer}>
        <h1 className={s.searchTitle}>Movie Searcher</h1>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className={s.inputContainer}>
            <input
              className={s.searchInput}
              placeholder='Search any movie..'
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button className={s.searchSubmit} type="submit"><Search/></button>
          </div>
        </form>
        <ul className={s.ulStyle}>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                <li className={s.listMovies}>
                  <span className={s.movie}>{movie.Title}</span>
                  <Link to='/'>
                    <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie. imdbID})}><StarOutline /></button>
                  </Link>
                </li>
              </Link>
            ))}
        </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
