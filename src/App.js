import React from 'react';
import Nav from './components/Nav';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
    </div>
  );
}

const StyledBackground = styled.div``;

export default App;
