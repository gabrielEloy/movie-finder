import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    
    body{
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        background: #201F32;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
    }
    h1,h2,h3{
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle;