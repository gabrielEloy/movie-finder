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
                        {/* <div className="options">
                                    <label htmlFor="type">Tipo</label>                        
                                    <select onChange={typeHandler} value={type} placeholder="escolha um tipo" name="type">
                                        <option value="movie">Filme</option>
                                        <option value="series">Série</option>
                                        <option value="episode">Episódio</option>
                                        <option value="game">jogo</option>
                                    </select>
                                    <label htmlFor="year">ano</label>
                                    <input placeholder="Filtre por ano" type="number" id="year" name="year" onChange={yearHandler}/>  
                        </div> */}
                </div>
            </SearchContainer>
        )
    }


const SearchContainer = styled.div`      
   height: 100%;
   .filters{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15vh;
    justify-content: center;
    border-radius: 10px;
        .input-block{
            display: flex;
            width: ${props => props.width ? props.width : '60%'};
            box-shadow: -6px 0 60px 10px black;
            input{
                font-family: inherit;
                flex: 8;
                height: 50px;
                border-radius: 5px 0 0 5px;
                border-right: none;
                border: solid 1px #FFFFFF;
                background: none;
                box-sizing: border-box;
                font-size: 1.3em;
                color: #a3a3a3;
                padding: 20px;
                :focus{
                    outline: none;
                }
            }
            button{
                flex: 2;
                font-family: inherit;
                border-left: none;
                border-radius: 0px 5px 5px 0px;
                background: none;
                height: 51px;
                box-sizing: border-box;
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
