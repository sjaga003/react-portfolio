import * as React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { darkTheme, GlobalStyle } from '../components/GlobalStyles';
import { useMediaQuery } from 'react-responsive';

// markup
const NotFoundPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Main>
        <Content>
          <Section>
            <span>404</span>
          </Section>
          <Section>
            Something's wrong. Look's like you went the wrong way. Head back to
            the <LinkTag to="/">home page</LinkTag>!
          </Section>
        </Content>
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default NotFoundPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Content = styled.div`
  height: 100%;
  padding: 6rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    color: var(--heading-color);
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: var(--fs-title);
    width: 100%;
    padding-bottom: 2rem;
  }
  @media (max-width: 575.98px) {
    padding: 1rem 1rem;
    font-size: var(--fs-xs);
  }
`;

const Section = styled.div`
  width: 100%;
  font-size: var(--fs-md);
  font-weight: 400;
  max-width: 40ch;
  text-align: center;
`;

const LinkTag = styled(Link)`
  color: var(--highlight-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
