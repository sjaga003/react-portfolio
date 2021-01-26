import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  bgColor: '#e8e8e8',
  secondaryColor: '#f6f5f7',
  textColor: '#444452',
  highlightColor: '#0065D1',
  headingColor: '#323133',
  fsXs: '14px',
  fsSm: '16px',
  fsMd: '18px',
  fsLg: '20px',
  fsXl: '24px',
  fsHeading: '32px',
  fsTitle: '64px',
  fsTitleM: '48px',
  fsSkillIcons: '64px',
  buttonDefault: 'rgba(0,101,209, 0)',
  buttonHovered: 'rgba(0,101,209, 0.3)',
  buttonTextDefault: '#3EA0E6',
  buttonTextHovered: '#e8e8e8',
  tableRowHover: '#c3c3c3',
  secondaryColorVisible: 'rgba(50, 58, 78, 1)',
  secondaryColorHidden: 'rgba(50, 58, 78, 0)',
};

export const darkTheme = {
  bgColor: '#171c28',
  secondaryColor: '#323A4E',
  textColor: '#BCBCBC',
  highlightColor: '#3EA0E6',
  headingColor: '#D1DDE4',
  fsXs: '14px',
  fsSm: '16px',
  fsMd: '18px',
  fsLg: '20px',
  fsXl: '24px',
  fsHeading: '32px',
  fsTitle: '64px',
  fsTitleM: '48px',
  fsSkillIcons: '64px',
  buttonDefault: 'rgba(62,160,230, 0)',
  buttonHovered: 'rgba(62,160,230, 0.15)',
  buttonTextHovered: '#3EA0E6',
  tableRowHover: 'rgba(50, 58, 78, 0.6)',
  secondaryColorVisible: 'rgba(50, 58, 78, 1)',
  secondaryColorHidden: 'rgba(50, 58, 78, 0)',
};

export const GlobalStyle = createGlobalStyle`
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
        --bg-color: ${({ theme }) => theme.bgColor};
        --secondary-color: ${({ theme }) => theme.secondaryColor};
        --text-color:${({ theme }) => theme.textColor};
        --highlight-color: ${({ theme }) => theme.highlightColor};
        --heading-color: ${({ theme }) => theme.headingColor};
        --fs-xs: ${({ theme }) => theme.fsXs};
        --fs-sm: ${({ theme }) => theme.fsSm};
        --fs-md: ${({ theme }) => theme.fsMd};
        --fs-lg: ${({ theme }) => theme.fsLg};
        --fs-xl: ${({ theme }) => theme.fsXl};
        --fs-heading: ${({ theme }) => theme.fsHeading};
        --fs-title: ${({ theme }) => theme.fsTitle};
        --fs-title-m: ${({ theme }) => theme.fsTitleM};
        --fs-skill-icons: ${({ theme }) => theme.fsSkillIcons};
        --button-default: ${({ theme }) => theme.buttonDefault};
        --button-hovered: ${({ theme }) => theme.buttonHovered};
        --button-text-hovered: ${({ theme }) => theme.buttonTextHovered};
        --table-row-hover: ${({ theme }) => theme.tableRowHover};
        --secondary-color-visible: ${({ theme }) =>
          theme.secondaryColorVisible};
        --secondary-color-hidden: ${({ theme }) => theme.secondaryColorHidden};
        
    }
    .App {
        width: 100%;
        height: 100%;
    }
    .highlight {
        color: var(--highlight-color);
        /* font-weight: 600; */
    }
    
    @media (max-width: 575.98px) { }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {  }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {  }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {  }
 
`;
