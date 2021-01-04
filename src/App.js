import React from 'react';
import Nav from './components/Nav';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Main>
        <About />
        <Projects />
      </Main>
    </div>
  );
}

const Main = styled.div`
  padding: 0px 310px 0px 310px;
`;

export default App;
