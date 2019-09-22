import movieReducer from './movieReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: movieReducer,
})

export default rootReducer;