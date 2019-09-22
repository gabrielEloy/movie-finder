import React, { useEffect } from 'react';
import { loadMore } from '../redux/actions/movieActions'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import SearchContainer from '../components/SearchContainer';

function MovieSearch() {
  const movies = useSelector(state => state.movies)
  useEffect(() => console.log('olá em teste eu sou os movies',movies), [movies])  
  const dispatch = useDispatch();

  async function bla(){
 
   dispatch(loadMore())
  }
  return (
        <Wrapper>
          <header>
            <h1>Movie Finder</h1>
            <h3>Um lugar para encontrar seus filmes favoritos</h3>
          </header>
          <div className="input">
            <SearchContainer />
          </div>
          <section>
          {movies.movies && movies.movies.map(e => <MovieCard key={e.imdbID} title={e.Title} imgURL={e.Poster} releaseDate={e.Year} type={e.Type} />)}
          </section>
          <button onClick={bla}> carregar mais </button>
        </Wrapper>
    )
  }


const Wrapper = styled.div`
  header{
    border: solid 1px red;
    padding: 20px 0 40px 0;
    color: white;
  }

  .input{
      width: 100%;
      margin: 20px 0;
      justify-content: center;
    }
`

export default MovieSearch