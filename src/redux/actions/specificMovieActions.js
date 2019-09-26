import {  SPECIFIC_MOVIE } from '../actionTypes'

export function setSpecificMovieId(id){
    return ({type: SPECIFIC_MOVIE.SET_ID, payload: {searchParams: { i: id }}})
}

export function setSpecificMovieInfo(movieInfo){
    return ({type: SPECIFIC_MOVIE.SET_INFO, payload: { movieInfo, dataFetchDone: true }})
}

export function exitSpecificMovieScreen(){
    return ({type: SPECIFIC_MOVIE.EXIT_SCREEN })
}