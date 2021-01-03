import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
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
        height: 100vh;
    }
`;
export default GlobalStyle;
