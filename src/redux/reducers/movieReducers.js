import { MOVIES } from '../actionTypes'

const initialState = {
    searchParams: {},
    movies: [],
    page: 1,
    results: 0
}

function movieReducer(state = initialState, action) {
    switch(action.type){
        case MOVIES.SET_SEARCH_PARAMS:
            return Object.assign({}, state, action.payload)
        case MOVIES.FETCH_SEARCHED_MOVIE:
            return Object.assign({}, state, action.payload)
        case MOVIES.LOAD_MORE:
            return Object.assign({}, state);
        case MOVIES.LOAD_MORE_SUCCESSFUL:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}

export default movieReducer;