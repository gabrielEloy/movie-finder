import { takeEvery, call, select, all, put } from 'redux-saga/effects';
import { removeDuplicatesByObjKey } from '../helpers/helperFunctions'
import { getMovies } from '../services/getMovies'
import { fetchMovies, setLoadMore } from './actions/movieActions'
import { MOVIES } from './actionTypes'

function* asyncGetMovies(){
    try {
        const searchParams = yield select(state => state.movies.searchParams)
        const response = yield call(getMovies, searchParams)
        //For some reason, sometimes the api returns the same movie two times
        //so here I clean the duplicates
        let filteredSearch = removeDuplicatesByObjKey(response.Search, 'imdbID')
        response.Search = filteredSearch
        yield put(fetchMovies(response))
    } catch (e) {
        console.log(e)
    }
}

function* asyncLoadMore(){
    try{
        const movies = yield select(state => state.movies)
        const searchParams = yield movies.searchParams
        searchParams.page = yield (movies.page + 1)
        const response = yield call(getMovies, searchParams)
        response.Search = removeDuplicatesByObjKey(response.Search, 'imdbID')
        const newMovieArray = [...movies.movies, ...response.Search]
        const data = {
            movies: newMovieArray,
            page: movies.page + 1
        }
        yield put(setLoadMore(data))
        
    } catch (e){

    }
}

export default function* root(){
    yield all([
        takeEvery(MOVIES.SET_SEARCH_PARAMS, asyncGetMovies),
        takeEvery(MOVIES.LOAD_MORE, asyncLoadMore)
    ])
}