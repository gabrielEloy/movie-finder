import React from 'react'
import styled from 'styled-components';
import notFound from '../assets/image-not-found.jpg'

export default function SpecifiMovieBox({poster, year, plot, genre, director, country, awards, title, rating}) {
    return (
        <MovieBox>
            <div className="title-container">
                {title && <p className="title"><span className="orange">Título</span>: {title}</p>}
            </div>
            <div className="main-content">
                <div className="image-container">
                    {poster && <img className="poster" src={poster === 'N/A' ? notFound : poster}/>}
                </div>
                <div className="text-container">
                    <div className="main">
                        {year && <p className="text"><span className="orange">Ano</span>: {year}</p>}
                        {plot && <p className="text"><span className="orange">Resumo</span>: {plot}</p>}
                        {genre && <p className="text"><span className="orange">Gênero</span>: {genre}</p>}
                        {director && <p className="text"><span className="orange">Diretor</span>: {director}</p>}
                        {country && <p className="text"><span className="orange">País</span>: {country} </p>}
                    </div>
                <div className="secondary">
                    {awards && <p><span className="orange">Prêmios</span>: {awards}</p>}
                    <div className="rating-section">
                        {rating && <span className="orange">Nota no IMDB:</span>}
                        {rating && <h2>{rating}</h2>}
                    </div>
                </div>
                </div>
            </div>
        </MovieBox>
    )
}


const MovieBox = styled.div`
            width: 60%;
            background: rgba(110, 110, 110, 0.32);
            border-radius: 5px;
            display: flex;
            padding: 20px;
            min-width: 355px;
            flex-direction: column;
            .orange{
                        color: #f88418;
                    }

            .title{
                margin: 20px 0 20px 40px;
                text-align: start;
                width: 97%;
                color: white;
                font-size: 2.5em;
                font-family: inherit;
                border-radius: 5px;
            }
            .main-content{
                display: flex;
                @media (max-width: 995px){
                    flex-direction: column;
                }
                .image-container{
                margin-left: 40px;
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
                    font-size: 1.5em;
                    .rating-seciton{
                        display: flex;
                    }
                }
            }
            }
`
