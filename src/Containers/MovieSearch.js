import React, { useEffect } from 'react';
import Button from '../components/Button';
import { loadMore } from '../redux/actions/movieActions'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import SearchContainer from '../components/SearchContainer';
import { Link } from 'react-router-dom'
import NeonText from '../components/NeonText';
import noResults from '../assets/no-results-found.jpg'

function MovieSearch() {
  const moviesProperties = useSelector(state => state.movies)
  const dispatch = useDispatch();
  useEffect(() => console.log(moviesProperties), [moviesProperties])
  async function loadMoreHandler(){
   dispatch(loadMore())
  }

  function returnSearchResults() {
    if(moviesProperties.results === undefined){
      return <img className="not-found" src={noResults}/>
    } else {
      return (
        <>
        <section>
            {moviesProperties.movies && moviesProperties.movies.map(  e => (
              <Link key={e.imdbID} to="/specificMovie">
                <MovieCard className="grid-item"  id={e.imdbID} title={e.Title} imgURL={e.Poster} releaseDate={e.Year} type={e.Type} />
              </Link>
            ))}
        </section>
        {moviesProperties.results > moviesProperties.movies.length && <Button className="load-more"onClick={loadMoreHandler}>carregar mais</Button>} 
        </>
      )
    }
  }
  return (
        <Wrapper>
          <header>
            <NeonText>Movie Finder</NeonText>
            <h3>Um lugar para encontrar seus filmes favoritos</h3>
          </header>
          <div className="input">
            <SearchContainer />
          </div>
            <div className="results-container">
              {returnSearchResults()}
            </div>
        </Wrapper>
    )
  }


const Wrapper = styled.div`
  header{
    padding: 20px 0 40px 0;
    color: white;
  }

  .input{
      width: 100%;
      margin: 20px 0;
      justify-content: center;
    }

    .results-container{
      margin-top: 5%;
      .not-found{
        border-radius: 120px;
        margin-bottom: 10%;
        width: 400px;
      }
    }

    .load-more{
      margin: 20px;
    }

`

export default MovieSearch