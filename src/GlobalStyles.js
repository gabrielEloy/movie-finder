import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');
    
    body{
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'IBM Plex Mono',Helvetica, sans-serif;
        background: radial-gradient(30.28% 59.88% at 40.03% 14.6%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #212121;
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