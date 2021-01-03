import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
     html {
        height: 100%;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        --bg-color: #171c28;
        --secondary-color: #323A4E;
        --font-color: #BCBCBC;
        --highlight-color: #3EA0E6;
        --heading-color: #D1DDE4;
    }
    .App {
        height: 100vh;
    }
`;
export default GlobalStyle;
