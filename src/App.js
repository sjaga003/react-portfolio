import React from 'react';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledBackground>test</StyledBackground>
    </div>
  );
}

const StyledBackground = styled.div`
  background: var(--bg-color);
  height: 100%;
  color: var(--heading-color);
`;

export default App;
