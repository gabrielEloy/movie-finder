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
    <Wrapper onClick={() => setSpecificId(props.id)}>
      <p className="title">{props.title}</p>
      <img src={props.imgURL === 'N/A' ? notFound : props.imgURL}/>
      <ul>
        <li>ano de lançamento: {props.releaseDate}</li>
        <li>tipo: {props.type}</li>
      </ul>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background: rgba(255,255,255,0.6);
  /* max-width: 440px; */
  display: inline-block;
  border-radius: 5px;
  margin: 10px 20px;
  width: 320px;
  :hover{
    opacity: 0.6;
  }

  img{
    width: 280px;
    height: 400px;
    border-radius: 5px;
  }
  ul{
    list-style:none;
    text-align: start;
    margin-left: 10%;
    li{
      color: black;
    }
  }

  .title{
    font-size: 1.3em;
    background: #000;
    color: white;
    border-radius: 5px 5px 0 0;
  }
  .release-year{

  }
`