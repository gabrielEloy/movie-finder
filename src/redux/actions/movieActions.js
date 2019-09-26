import { MOVIES } from '../actionTypes'

export function setSearchParams(data ={}){
    return({type: MOVIES.SET_SEARCH_PARAMS, payload: {searchParams: data} })
}
export function fetchMovies(movies = []){
    return ({type: MOVIES.FETCH_SEARCHED_MOVIE, payload: { movies: movies.Search, results: movies.totalResults, page: 1 }})
}

export function loadMore(){
    return ({type: MOVIES.LOAD_MORE})
}

export function setLoadMore(data){
    return ({type: MOVIES.LOAD_MORE_SUCCESSFUL, payload: {movies: data.movies, page: data.page}})
}

