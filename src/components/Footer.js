import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <CenterText>Built & Designed by Suhas Jagannath</CenterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
`;

const CenterText = styled.div`
  font-family: 'Fira Code', monospace;
  color: var(--text-color);
  font-size: var(--fs-xs);
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xs) * 1.2);
  }
`;

export default Footer;
