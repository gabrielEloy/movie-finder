import {API_KEY} from './serviceConstants'
export async function getMovies(queryStringParams) {
    
    const KEY = API_KEY;
    let url = `http://www.omdbapi.com/?apikey=${KEY}`
    if(queryStringParams.s){
        let formattedTitle = queryStringParams.s;
        while(formattedTitle.indexOf(' ') !== -1){
            formattedTitle = formattedTitle.replace(' ', '+');
        }
        queryStringParams.s = formattedTitle;
    }
    let queryParams = queryStringParams
    for(let i in queryParams){
        if( queryParams[i] === undefined){
        delete queryParams[i]
        }
    }
    let params = Object.keys(queryParams)
    params = params.map(e => `&${e}=${queryParams[e]}`)
    for(let param of params){
        url += param
    }
    try {
        const promise = await fetch(url)
        const result = await promise.json()
        return result
    } catch (e) {
        console.warn(e);
    }
}

export function getSpecificMovie() {
    
}