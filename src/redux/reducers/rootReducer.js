import movieReducer from './movieReducers';
import specificMovieReducer from './specificMovieReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: movieReducer,
    specificMovie: specificMovieReducer
})

export default rootReducer;