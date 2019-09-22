import React from 'react';
import styled from 'styled-components';

export default function MovieCard(props) {
  return (
    <Wrapper>
      <p className="title">{props.title}</p>
      <img src={props.imgURL}/>
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

  img{
    width: 90%;
    border-radius: 5px;
  }
  ul{
    list-style:none;
    text-align: start;
    margin-left: 10%;
  }

  .title{
    font-size: 2em;
    background: #000;
    color: white;
    border-radius: 5px 5px 0 0;
  }
  .release-year{

  }
`