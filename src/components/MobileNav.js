import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGem,
  faLaptopCode,
  faTimes,
  faUser,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, animateScroll } from 'react-scroll';
import Resume from '../files/Suhas_Jagannath_Resume.pdf';

const burgerVariant = {
  intitial: {
    rotate: 0,
  },
  click: {
    rotate: 180,
  },
};

const navVariant = {
  initial: {
    x: 800,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  click: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const hoverVariant = {
  show: {},
  hover: {
    color: 'var(--highlight-color)',
  },
};

const MobileNav = ({ navOpen, setNavOpen }) => {
  try {
    const element = document.getElementById('content');
    if (navOpen) {
      document.body.setAttribute('style', ` overflow: hidden; height: 100%;`);

      element.setAttribute(
        'style',
        `filter: blur(4px); transition: all 0.3s; `
      );
    } else {
      document.body.setAttribute('style', 'overflow: unset');
      element.setAttribute('style', 'transition: all 0.3s');
    }
  } catch {}
  return (
    <>
      <BurgerContainer
        variants={burgerVariant}
        animate={navOpen ? 'click' : 'initial'}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        whileHover={{ color: 'var(--highlight-color)' }}
      >
        {navOpen ? <ExitIcon icon={faTimes} /> : <BurgerIcon icon={faBars} />}
      </BurgerContainer>
      <AnimatePresence>
        {navOpen && (
          <MenuContainer
            id="MenuContainer"
            onClick={(e) => {
              if (e.target.id === 'MenuContainer') {
                setNavOpen(!navOpen);
              }
            }}
          >
            <MobileMenu
              variants={navVariant}
              initial={'initial'}
              animate={'click'}
              exit={'initial'}
              id="MobileMenu"
            >
              <List>
                <LinkBox
                  to="AboutSection"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  activeClass={'active'}
                  offset={-64}
                >
                  <ListItem
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <IconContainer>
                      <FontAwesomeIcon icon={faUser} />
                    </IconContainer>
                    <NavText>About</NavText>
                  </ListItem>
                </LinkBox>
                <LinkBox
                  to="ProjectsSection"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  activeClass={'active'}
                  offset={-64}
                >
                  <ListItem
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <IconContainer>
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </IconContainer>
                    <NavText>Projects</NavText>
                  </ListItem>
                </LinkBox>
                <LinkBox
                  to="SkillsSection"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  activeClass={'active'}
                  offset={-64}
                >
                  <ListItem
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <IconContainer>
                      <FontAwesomeIcon icon={faGem} />
                    </IconContainer>
                    <NavText>Skills</NavText>
                  </ListItem>
                </LinkBox>
                <IconItem>
                  <Icon
                    href="https://github.com/sjaga003"
                    target="_blank"
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Icon>

                  <Icon
                    href="https://www.linkedin.com/in/suhas-jagannath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Icon>
                  <Icon
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={hoverVariant}
                    initial={'show'}
                    whileHover={'hover'}
                  >
                    <FontAwesomeIcon icon={faFileAlt} />
                  </Icon>
                </IconItem>
              </List>
            </MobileMenu>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

const BurgerIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;
const ExitIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: absolute;
  top: -10px;
  right: -25px;
`;

const NavText = styled.span``;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  margin-right: 10px;
`;

const Icon = styled(motion.a)`
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  margin-right: 20px;
  color: inherit;
  font-size: var(--fs-md);
`;

const BurgerContainer = styled(motion.div)`
  z-index: 4;
  padding: 10px;
  user-select: none;
  cursor: pointer;
`;

const LinkBox = styled(Link)`
  height: 30px;

  &.active li {
    color: var(--highlight-color) !important;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  width: 50%;
  justify-content: left;
  align-items: flex-start;
  @media (max-width: 575.98px) {
    width: 80%;
  }
`;

const ListItem = styled(motion.li)`
  display: flex;
  cursor: pointer;
  font-size: var(--fs-lg);
  color: var(--text-color);

  @media (max-width: 575.98px) {
    font-size: var(--fs-sm);
  }
`;

const IconItem = styled(ListItem)`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  align-self: center;
  cursor: unset;
`;

const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  z-index: 3;
  background: rgba(23, 28, 40, 1);
  box-shadow: -10px 0px 30px #000;
`;
