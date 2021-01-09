import React, { useState } from 'react';
import Nav from './components/Nav';

//Styles
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ProjectMatrix from './components/ProjectMatrix';

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 767.98px)` });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />

      <Nav isMobile={isMobile} />
      <ProjectMatrix
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isMobile={isMobile}
      />
      <Content id="content">
        <Main>
          <About isMobile={isMobile} />
          <Projects
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isMobile={isMobile}
          />
          <Skills isMobile={isMobile} />
        </Main>
      </Content>
      <Footer />
    </div>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  min-height: 100vh;
  padding: 0px 100px;
  &::before {
    display: block;
    content: '';
    height: 100px; /* or whatever */
  }
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export default App;
