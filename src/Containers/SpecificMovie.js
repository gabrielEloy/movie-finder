import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import SpecificMovieBox from '../components/SpecificMovieBox';
import { exitSpecificMovieScreen } from '../redux/actions/specificMovieActions'

export default function SpecificMovie() {
    const movieData = useSelector(state => state.specificMovie)
    const dispatch = useDispatch();
    useEffect(() => console.log('movieData', movieData), [movieData])
    
    function backHandler() {
        dispatch(exitSpecificMovieScreen())
    }
    return (
        <SpeficPage>
            <div className="header">
                <Link onClick={backHandler} className="link" to='/'>
                    <h2>Go Back</h2>
                </Link>
            </div>
            <div className="content">
                {movieData.dataFetchDone && 
                <SpecificMovieBox
                    title={movieData.movieInfo.Title}
                    poster={movieData.movieInfo.Poster}
                    year={movieData.movieInfo.Year}
                    plot={movieData.movieInfo.Plot}
                    genre={movieData.movieInfo.Genre}
                    director={movieData.movieInfo.Director}
                    country={movieData.movieInfo.Country}
                    awards={movieData.movieInfo.Awards}
                /> }
            </div>
        </SpeficPage>
    )
}

const SpeficPage = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .link{
            position: absolute;
            color: white;
            left: 5%;
            top: 40px;
        }
    }
    .content{
        display: flex;
        margin-top: 15%;
        @media (max-width: 426){
            margin-top: 30%;
        }
        justify-content: center;
        align-items: center;
    }
`