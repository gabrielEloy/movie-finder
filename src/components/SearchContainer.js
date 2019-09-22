import React, { useState, useEffect } from 'react';
import { setSearchParams } from '../redux/actions/movieActions'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


export default function SearchBar(props){
    const [title, setTitle] = useState(undefined);
    const [type, setType] = useState(undefined);
    const [year, setYear] = useState(undefined);
    const [optionsVisibility, setVisibiilty] = useState(true)
    let dispatch = useDispatch();
    const globalState = useSelector(state => state.search)

    // useEffect(() => console.log(globalState), [dispatch])
    
    function search(){
        const data = {
            s: title,
            type,
            year
        }
        const payload = setSearchParams(data)
        dispatch(payload)
    }


        return (
            <SearchContainer>
                {/* <h2>Pesquise um fime</h2>
                <p>aqui você pode pesquisar pelo título de um filme e saber diversas informações sobre ele</p> */}
                <div className="filters">
                    <div className="input-block">
                        <input type="text" id="title" onBlur={(e) => setTitle(e.target.value)}/>
                        <button onClick={() => setVisibiilty(!optionsVisibility)}>opções </button>
                    </div>
                    {optionsVisibility && 
                        <div className="options">
                                    <label htmlFor="type">Tipo</label>                        
                                    <select onChange={(e) => setType(e.target.value)} name="type">
                                        <option value="movie">Filme</option>
                                        <option value="series">Série</option>
                                        <option value="episode">Episódio</option>
                                    </select>
                                    <label htmlFor="year">ano</label>
                                    <input type="number" id="year" name="year" onChange={(e) => setYear(e.target.value)}/>  
                                <button onClick={search} className="search">
                                    Buscar
                                </button>
                        </div>}

                    
                </div>
            </SearchContainer>
        )
    }


const SearchContainer = styled.div`   
   .filters{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
        .input-block{
            display: flex;
            width: ${props => props.width ? props.width : '60%'};
            box-shadow: -6px 0 60px 10px black;
            input{
                flex: 8;
                height: 50px;
                border-radius: 10px 0px 0px 10px;
                border: none;
                box-sizing: border-box;
                font-size: 1.3em;
                color: #c3c3c3;
                padding: 20px;
                :focus{
                    outline: none;
                }
            }
            button{
                flex: 2;
                border: none;
                border-radius: 0px 10px 10px 0px;
                height: 51px;
                box-sizing: border-box;
                background: #525252;
                color: white;
                font-weight: 600;
                text-transform: uppercase;
                :hover{
                    cursor: pointer;;
                }
            }
        }
        .options{
            transition: opacity 5s;
            width: ${props => props.optionsWidth ? props.optionsWidth : '58%'};
            border-radius: 0 0 20px 20px;
            background: #c3c3c3;
            
        }
}
`
