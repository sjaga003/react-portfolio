import React from 'react';
import Nav from './components/Nav';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion, useAnimation } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Main>
        <About />
        <Projects />
        <Skills />
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.div`
  padding: 0px 20vw 0px 20vw;
  display: flex;
  flex-direction: column;
`;

export default App;
