import React from 'react';
import Nav from './components/Nav';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledBackground>
        <Nav />
      </StyledBackground>
    </div>
  );
}

const StyledBackground = styled.div`
  background: var(--bg-color);
  height: 100%;
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
`;

export default App;
