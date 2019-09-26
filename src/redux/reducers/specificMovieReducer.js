import { SPECIFIC_MOVIE } from '../actionTypes'

const initialState = {
    searchParams: {
        i: undefined
    },
    movieInfo: {},
    dataFetchDone: false
}

function specificMovieReducer(state = initialState, action) {
    switch(action.type){
        case SPECIFIC_MOVIE.SET_ID:
            return Object.assign({}, state, action.payload);
        case SPECIFIC_MOVIE.SET_INFO:
            return Object.assign({}, state, action.payload);
        case SPECIFIC_MOVIE.EXIT_SCREEN:
            return initialState;
        default:
            return state;
    }
}

export default specificMovieReducer;