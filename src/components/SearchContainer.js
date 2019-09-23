import React, { useState, useEffect } from 'react';
import { setSearchParams } from '../redux/actions/movieActions';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


export default function SearchBar(props){
    const [title, setTitle] = useState(undefined);
    const [type, setType] = useState(undefined);
    const [year, setYear] = useState(undefined);
    const [optionsVisibility, setVisibiilty] = useState(false)
    let dispatch = useDispatch();
    
    function search(){
        const data = {
            s: title,
            type,
            y: year
        }
        const payload = setSearchParams(data)
        if(!data.s){
            if(!toast.isActive('empty-search-error')) toast.error('Você não pode fazer uma busca em branco', {toastId: 'empty-search-error'})
        } else{
        dispatch(payload)
        }
    }
    function titleChangeHandler (e){
        setTitle(e.target.value.trim())
    }
    function yearHandler(e){
        setYear(e.target.value)
    }
    function typeHandler(e){
        setType(e.target.value)
    }

        return (
            <SearchContainer>
                <div className="filters">
                    <div className="input-block">
                        <input type="text" id="title" name="title" placeholder="busque um filme por nome" onChange={titleChangeHandler}/>
                        <button onClick={search}>Buscar</button>
                    </div>
                        <div className="options">
                                    <label htmlFor="type">Tipo</label>                        
                                    <select onChange={typeHandler} value={type} placeholder="escolha um tipo" name="type">
                                        <option value="movie">Filme</option>
                                        <option value="series">Série</option>
                                        <option value="episode">Episódio</option>
                                        <option value="game">jogo</option>
                                    </select>
                                    <label htmlFor="year">ano</label>
                                    <input placeholder="Filtre por ano" type="number" id="year" name="year" onChange={yearHandler}/>  
                        </div>
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
                color: #000000;
                padding: 20px;
                :focus{
                    outline: none;
                }
            }
            button{
                font-family: 'Poppins',sans-serif;
                flex: 2;
                border: none;
                border-radius: 0px 10px 10px 0px;
                height: 51px;
                box-sizing: border-box;
                background: #525252;
                color: white;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                :hover{
                    cursor: pointer;;
                }
            }
        }
        .options{
            display:flex;
            flex-direction: column;
            align-items: center;
            width: 55%;
            border-radius: 0 0 20px 20px;
            background: #c3c3c3;
            background: #c3c3c330;
            border: 2px solid white;
            box-sizing: border-box;
            border-top: none;
            padding: 15px;
            color: white;
            input, select{
                width: 60%;
                height: 30px;
                border-radius: 5px;
                border: none;
                box-sizing: border-box;
                padding: 5px;
            }
            label{
                margin: 10px 0;
            }
            
        }
}
`
