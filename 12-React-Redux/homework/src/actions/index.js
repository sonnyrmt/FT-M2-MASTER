export const GET_MOVIES = 'GET_MOVIES',
       GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL',
       ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE',
       REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

export function getMovies(title) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d2340859&s=${title}`)
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_MOVIES, payload: json})
        })
        .catch(err => console.log(err))
    }
}

export function getMovieDetail(id) { // payload = objeto con detalles de la pelicula
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=d2340859&i=${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_MOVIE_DETAIL, payload: json})
        })
    }
}

export function addMovieFavorite(payload) { // payload = nombre de la pelicula
    return {type: ADD_MOVIE_FAVORITE , payload };
}

export function removeMovieFavorite(payload) { // payload = pelicula a eliminar
    return {type: REMOVE_MOVIE_FAVORITE , payload}
}