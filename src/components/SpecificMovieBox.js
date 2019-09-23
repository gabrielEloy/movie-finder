import React from 'react'
import styled from 'styled-components';
import notFound from '../assets/image-not-found.jpg'

export default function SpecifiMovieBox({poster, year, plot, genre, director, country, awards, title}) {
    return (
        <MovieBox>
            <div className="image-container">
                {title && <p className="title">Título: {title}</p>}
                {poster && <img className="poster" src={poster === 'N/A' ? notFound : poster}/>}
            </div>
            <div className="text-container">
                <div className="main">
                    {year && <p className="text">Ano: {year}</p>}
                    {plot && <p className="text">Resumo: {plot}</p>}
                    {genre && <p className="text">Gênero: {genre}</p>}
                    {director && <p className="text">Diretor: {director}</p>}
                    {country && <p className="text">País: {country} </p>}
                </div>
            <div className="secondary">
                {awards && <p>Prêmios: {awards}</p>}
            </div>
            </div>
        </MovieBox>
    )
}


const MovieBox = styled.div`
            width: 60%;
            background: rgba(188,163,163,0.32);
            border-radius: 5px;
            display: flex;
            padding: 20px;
            min-width: 355px;
            @media (min-width: 414px){
                flex-direction: column;
            }

            .title{
                margin: 40px 0;
                width: 100%;
                background: black;
                color: white;
                font-size: 1.6em;
                font-family: 'Poppins', sans-serif;
                border-radius: 5px;
            }
            .image-container{
                img{
                    border-radius: 5px;
                }
            }
            .poster{
            width: 300px;
            height: 445px;
            }
            .text-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                .main{
                    .text{
                    color: white;
                    flex: 1;
                    text-align: left;
                    width: 80%;
                    margin-left: 10%;
                    }
                }
                .secondary{
                    color: white;
                    flex: 1;
                }
            }
`
