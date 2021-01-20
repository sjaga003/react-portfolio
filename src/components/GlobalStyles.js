import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        box-sizing: border-box;
        position:relative;
        height: 100%;
    }
    body {
        width: 100%;
        background: var(--bg-color);
        color: var(--text-color);
        font-family: 'Roboto', sans-serif;
        position:relative;
        overflow-x:hidden;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        --bg-color: #171c28;
        --secondary-color: #323A4E;
        --text-color: #BCBCBC;
        --highlight-color: #3EA0E6;
        --heading-color: #D1DDE4;
        --fs-xs: 14px;
        --fs-sm: 16px;
        --fs-md: 18px;
        --fs-lg: 20px;
        --fs-xl: 24px;
        --fs-heading: 32px;
        --fs-title: 64px;
        --fs-title-m: 48px;
        --fs-skill-icons: 64px;
    }
    .App {
        width: 100%;
        height: 100%;
    }
    .highlight {
        color: var(--highlight-color);
        font-weight: 600;
    }
    
    @media (max-width: 575.98px) { }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {  }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {  }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {  }
 
`;
export default GlobalStyle;
