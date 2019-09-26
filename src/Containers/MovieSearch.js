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
        <div className="movies-box">
          <section>
              {moviesProperties.movies && moviesProperties.movies.map(  e => (
                <Link key={e.imdbID} to="/specificMovie">
                  <MovieCard className="grid-item"  id={e.imdbID} title={e.Title} imgURL={e.Poster} releaseDate={e.Year} type={e.Type} />
                </Link>
              ))}
          </section>
          {moviesProperties.results > moviesProperties.movies.length && 
          <Button className="load-more" onClick={loadMoreHandler}>carregar mais</Button>
          } 
        </div>
      )
    }
  }
  return (
        <Wrapper>
          <div className="upper-part">
              <header>
                <div className="title">
                  <h1>Movie</h1>
                  <h3>Movies</h3>
                </div>
              </header>
              <div className="input">
                <SearchContainer />
              </div>
          </div>
            <div className="results-container">
              {returnSearchResults()}
            </div>
        </Wrapper>
    )
  }


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .upper-part{
    display: flex;
    margin-left: 10%;
    flex: 2;
    @media (max-width: 900px){
      flex-direction: column;
    }
      header{
      color: white;
      .title{
        text-align: left;
        flex: 2;
        margin: 20px 0 0 25px;
        @media (max-width: 900px){
          margin-left: 13%;
        }
        h1{
          font-weight: 600;
          text-transform: uppercase;
          font-size: 6em;
          color: #D5D5D5;
        }
        h3{
          font-size: 3em;
          color: #BD5B00;
        }
      }
    }
    .input{
        width: 100%;  
        flex: 8;
        align-self: center;
        margin: 10px 0 0 5%;
        @media (max-width:  900px) {
          margin: 10px 0 0 25%;
        }
      }
  }


    .results-container{
      flex: 7;
      margin-top: 5%;
      .not-found{
        border-radius: 120px;
        margin-bottom: 10%;
      }
    }

    .load-more{
      margin: 20px;
    }

`

export default MovieSearch