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
  font-size: 14px;
`;

export default Footer;
