import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faGem } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  return (
    <Navigation>
      <Logo>SJ</Logo>
      <NavHeadings>
        <NavHeading>
          <FontAwesomeIcon icon={faUser} />
          <NavText>About</NavText>
        </NavHeading>
        <NavHeading>
          <FontAwesomeIcon icon={faLaptopCode} />
          <NavText>Projects</NavText>
        </NavHeading>
        <NavHeadingLast>
          <FontAwesomeIcon icon={faGem} />
          <NavText>Skills</NavText>
        </NavHeadingLast>
        <NavHeading>
          <FontAwesomeIcon icon={faGithub} />
        </NavHeading>
        <NavHeading>
          <FontAwesomeIcon icon={faLinkedin} />
        </NavHeading>
      </NavHeadings>
    </Navigation>
  );
};

const Logo = styled.div`
  font-family: 'Staatliches', cursive;
  font-weight: 400;
  font-size: var(--fs-heading);
  &::after {
    content: '';
    display: block;
    position: relative;
    height: 2px;
    width: 28px;
    top: -6px;
    background: var(--text-color);
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 80px 0px 80px;
`;

const NavHeadings = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavHeading = styled.li`
  padding-left: 20px;
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
`;

const NavHeadingLast = styled(NavHeading)`
  &::after {
    content: '';
    display: block;
    position: relative;
    height: 2px;
    width: 80px;
    margin-left: 20px;
    background: var(--text-color);
  }
`;

const NavText = styled.span`
  padding-left: 8px;
`;

export default Nav;
