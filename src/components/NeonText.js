import styled from 'styled-components';
import { lighten } from 'polished'

//this component is a bit dumb, I will make it smarter if I got the time

const NeonText = styled.span`
    font-family: neon;
    @media (max-width: 655px){
        font-size: 4em;
    }
    font-size: ${props => props.fontSize ? props.fontSize : '6em'};
    color: ${props => props.neonColor ? props.neonColor : '#ffd8d8'};
    padding: 0 3.5rem 0 3.5rem;
    text-shadow: ${props => props.neonColor ? 
    `0.1vw 0vw 0.25vw ${lighten('0.7', props.neonColor)},
    0.2vw 0vw 0.25vw ${lighten('0.7', props.neonColor)},
    0.4vw 0vw 0.25vw ${lighten('0.7', props.neonColor)}, 
    0.1vw 0vw 0vw ${lighten('0.35', props.neonColor)}, 
    0.2vw 0vw 0vw ${lighten('0.35', props.neonColor)}, 
    0.4vw 0vw 0vw ${lighten('0.35', props.neonColor)}, 
    0.1vw 0vw 0.1vw ${lighten('0.35', props.neonColor)}, 
    0.2vw 0vw 0.1vw ${lighten('0.35', props.neonColor)}, 
    0.4vw 0vw 0.1vw ${lighten('0.35', props.neonColor)}, 
    0.1vw 0vw 2vw ${lighten('0.35', props.neonColor)}, 
    0.2vw 0vw 2vw ${lighten('0.35', props.neonColor)}, 
    0.4vw 0vw 2vw ${lighten('0.35', props.neonColor)}, 
    0.1vw 0vw 1vw ${props.neonColor}, 
    0.2vw 0vw 1vw ${props.neonColor}, 
    0.4vw 0vw 5vw ${props.neonColor}, 
    0.1vw 0vw 5vw ${props.neonColor}, 
    0.2vw 0vw 20vw ${props.neonColor}, 
    0.4vw 0vw 10vw ${props.neonColor}, 
    0.1vw 0vw 10vw ${props.neonColor}, 
    0.2vw 0vw 30vw ${props.neonColor}, 
    0.4vw 0vw 10vw ${props.neonColor}` :
    
    `0.1vw 0vw 0.25vw #ffd8d8,
    0.2vw 0vw 0.25vw #ffd8d8,
    0.4vw 0vw 0.25vw #ffd8d8, 
    0.1vw 0vw 0vw #f25757, 
    0.2vw 0vw 0vw #f25757, 
    0.4vw 0vw 0vw #f25757, 
    0.1vw 0vw 0.1vw #f25757, 
    0.2vw 0vw 0.1vw #f25757, 
    0.4vw 0vw 0.1vw #f25757, 
    0.1vw 0vw 2vw #f25757, 
    0.2vw 0vw 2vw #f25757, 
    0.4vw 0vw 2vw #f25757, 
    0.1vw 0vw 1vw #e50b0b, 
    0.2vw 0vw 1vw #e50b0b, 
    0.4vw 0vw 5vw #e50b0b, 
    0.1vw 0vw 5vw #e50b0b, 
    0.2vw 0vw 20vw #e50b0b, 
    0.4vw 0vw 10vw #e50b0b, 
    0.1vw 0vw 10vw #e50b0b, 
    0.2vw 0vw 30vw #e50b0b, 
    0.4vw 0vw 10vw #e50b0b`
    };
`
export default NeonText;