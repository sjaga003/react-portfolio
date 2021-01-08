import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGem,
  faLaptopCode,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
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
          <MobileMenu
            variants={navVariant}
            initial={'initial'}
            animate={'click'}
            exit={'initial'}
          >
            <List>
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
              <IconItem>
                <Icon
                  variants={hoverVariant}
                  initial={'show'}
                  whileHover={'hover'}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Icon>
                <Icon
                  variants={hoverVariant}
                  initial={'show'}
                  whileHover={'hover'}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Icon>
              </IconItem>
            </List>
          </MobileMenu>
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
`;

const NavText = styled.span``;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  margin-right: 10px;
`;

const Icon = styled(motion.div)`
  cursor: pointer;
`;

const BurgerContainer = styled(motion.div)`
  z-index: 4;
  padding: 10px;
  user-select: none;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 575.98px) {
    width: 60%;
  }
`;

const ListItem = styled(motion.li)`
  margin-bottom: 30px;
  display: flex;
  cursor: pointer;
  font-size: var(--fs-lg);
  @media (max-width: 575.98px) {
    font-size: var(--fs-sm);
  }
`;

const IconItem = styled(ListItem)`
  display: flex;
  justify-content: space-around;
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
