import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faGem } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const containerFadeIn = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
  hidden: { opacity: 0, y: -100 },
};

const navFadeIn = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      staggerChildren: 0.15,
      when: `beforeChildren`,
    },
  },
  hover: {
    color: 'var(--highlight-color)',
  },
};

const logoFadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const fillLine = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 0.2,
      when: `afterChildren`,
    },
  },
};

const Nav = () => {
  return (
    <Navigation>
      <Logo
        variants={logoFadeIn}
        whileHover="hover"
        initial="hidden"
        animate="show"
      >
        SJ
      </Logo>
      <NavHeadings variants={containerFadeIn} initial="hidden" animate="show">
        <NavHeading
          whileHover={{ color: 'var(--highlight-color)' }}
          variants={navFadeIn}
        >
          <FontAwesomeIcon icon={faUser} />
          <NavText>About</NavText>
        </NavHeading>
        <NavHeading
          whileHover={{ color: 'var(--highlight-color)' }}
          variants={navFadeIn}
        >
          <FontAwesomeIcon icon={faLaptopCode} />
          <NavText>Projects</NavText>
        </NavHeading>
        <NavHeading
          whileHover={{ color: 'var(--highlight-color)' }}
          variants={navFadeIn}
        >
          <FontAwesomeIcon icon={faGem} />
          <NavText>Skills</NavText>
        </NavHeading>
        <NavHeading className="breakLine">
          <svg
            width="90"
            height="3"
            viewBox="0 0 90 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={fillLine}
              d="M0.238281 1.44046H89.3949"
              stroke="#BCBCBC"
              stroke-width="2.07341"
            />
          </svg>
        </NavHeading>
        <NavHeading
          whileHover={{ color: 'var(--highlight-color)' }}
          variants={navFadeIn}
        >
          <FontAwesomeIcon icon={faGithub} />
        </NavHeading>
        <NavHeading
          whileHover={{ color: 'var(--highlight-color)' }}
          variants={navFadeIn}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </NavHeading>
      </NavHeadings>
    </Navigation>
  );
};

const Logo = styled(motion.div)`
  font-family: 'Staatliches', cursive;
  font-weight: 400;
  font-size: var(--fs-heading);
  &:hover {
    cursor: pointer;
  }
`;

const Navigation = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 80px 0px 80px;
`;

const NavHeadings = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavHeading = styled(motion.li)`
  padding-left: 20px;
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  &:hover:not(.breakLine) {
    cursor: pointer;
  }
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
