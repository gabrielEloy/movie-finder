import React from 'react';
import { useDispatch } from 'react-redux';
import { setSpecificMovieId } from '../redux/actions/specificMovieActions'
import styled from 'styled-components';
const notFound = require('../assets/image-not-found.jpg');


export default function MovieCard(props) {
  const dispatch = useDispatch();
  
  function setSpecificId(id) {
    
    const payload = setSpecificMovieId(id)
    dispatch(payload)
  }
  return (
    <Card onClick={() => setSpecificId(props.id)}>
      <img src={props.imgURL === 'N/A' ? notFound : props.imgURL}/>
      <div className="card">
        <ul>
        <li>{props.title}</li>
        <li>ano de lançamento: {props.releaseDate}</li>
        <li>tipo: {props.type}</li>
      </ul>
      </div>
    </Card>
  )
}


const Card = styled.div`
  display: inline-block;
  border-radius: 5px;
  margin: 10px 20px;
  position: relative;
  .card{
    position: absolute;
    display: none;
    width: 100%;
    bottom: 5px;
    border-radius: 0 0 5px 5px;
    height: 120px;
    ul{
      bottom:  0;
    }
  }
  :hover{
    .card{
      @keyframes reveal {
        from {opacity: 0.2}
        to {opacity: 0.8}
      }
    animation: reveal .3s;
    display: block;
    opacity: 0.8;
    background: #2a2a2a;
    }
  }

  img{
    width: 280px;
    height: 400px;
    border-radius: 5px;
  }
  ul{
    list-style:none;
    padding: 0;
    position: absolute;
    text-align: start;
    margin-left: 10%;
    li{
      color: #FFFFFF;
    }
  }

  .title{
    font-size: 1.3em;
    background: #000;
    color: white;
    border-radius: 5px 5px 0 0;
  }
`