import styled from 'styled-components';


const Button = styled.button`
    font-size: ${props => props.fontSize ? props.fontSize : '1.5em'};
    border-radius:  ${props => props.borderRadius ? props.borderRadius : '5px'};
    border: solid .5px white;
    background: ${props => props.background ? props.background : 'black'};;
    color: ${props => props.color ? props.color : 'white'};
    width: ${props => props.width ? props.width : '25%'};
    height: ${props => props.height ? props.height : '50px'};
    :hover{
        cursor: pointer;
        border: none;
        background: white;
        color: black;
    }
`

export default Button;