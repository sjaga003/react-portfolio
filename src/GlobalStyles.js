import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
    }
    body {
        height: 100%;
        min-height: 100%;
        width: 100%;
        overflow-x: hidden;
        background: var(--bg-color);
        color: var(--text-color);
        font-family: 'Roboto', sans-serif;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        --bg-color: #171c28;
        --secondary-color: #323A4E;
        --text-color: #BCBCBC;
        --highlight-color: #3EA0E6;
        --heading-color: #D1DDE4;
    }
    .App {
        width: 100%;
    }
 
`;
export default GlobalStyle;
