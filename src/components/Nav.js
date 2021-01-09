import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faGem } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import MobileNav from '../components/MobileNav';
import { Link, animateScroll } from 'react-scroll';

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
  },
  show: {
    opacity: 1,
    scale: 1,
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

const Nav = ({ isMobile }) => {
  const [navOpen, setNavOpen] = useState(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (!navOpen) {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 18) {
        document.getElementById('navbar').style.boxShadow =
          '0px 10px 30px -15px rgba(0, 0, 0, 0)';
      } else {
        document.getElementById('navbar').style.boxShadow =
          '0px 10px 30px -15px rgba(0, 0, 0, 0.7)';
      }
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-500px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  return (
    <Transition>
      <Navigation id="navbar">
        <Logo
          variants={logoFadeIn}
          whileHover={{ scale: 1.2 }}
          initial="hidden"
          animate="show"
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          SJ
        </Logo>
        {isMobile ? (
          <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
        ) : (
          <NavHeadings
            variants={containerFadeIn}
            initial="hidden"
            animate="show"
          >
            <LinkBox
              to="AboutSection"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClass={'active'}
              offset={-64}
            >
              <NavHeading
                whileHover={{ color: 'var(--highlight-color)' }}
                variants={navFadeIn}
              >
                <FontAwesomeIcon icon={faUser} />
                <NavText>About</NavText>
              </NavHeading>
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
              <NavHeading
                whileHover={{ color: 'var(--highlight-color)' }}
                variants={navFadeIn}
              >
                <FontAwesomeIcon icon={faLaptopCode} />
                <NavText>Projects</NavText>
              </NavHeading>
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
              <NavHeading
                whileHover={{ color: 'var(--highlight-color)' }}
                variants={navFadeIn}
              >
                <FontAwesomeIcon icon={faGem} />
                <NavText>Skills</NavText>
              </NavHeading>
            </LinkBox>
            <NavHeading style={{ marginLeft: '20px' }} className="breakLine">
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
            <NavHeadingIcon
              whileHover={{ color: 'var(--highlight-color)' }}
              variants={navFadeIn}
            >
              <FontAwesomeIcon icon={faGithub} />
            </NavHeadingIcon>
            <NavHeadingIcon
              whileHover={{ color: 'var(--highlight-color)' }}
              variants={navFadeIn}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </NavHeadingIcon>
          </NavHeadings>
        )}
      </Navigation>
    </Transition>
  );
};

const Transition = styled.div`
  #navbar {
    transition: all 0.5s;
  }
`;

const Logo = styled(motion.div)`
  font-family: 'Staatliches', cursive;
  font-weight: 400;
  font-size: var(--fs-heading);
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-heading) * 1.2);
  }
`;

const Navigation = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 80px;
  background: rgba(23, 28, 40, 1);
  position: fixed;
  width: 100%;
  z-index: 30;

  /* position: sticky;
  top: 0;
  background: var(--bg-color);
   */
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    padding: 10px 20px;
    height: 60px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const NavHeadings = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    display: none;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const NavHeading = styled(motion.li)`
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  &:hover:not(.breakLine) {
    cursor: pointer;
  }

  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k

    font-size: calc(var(--fs-sm) * 1.2);
  }
`;

const LinkBox = styled(Link)`
  margin-left: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  &.active {
    border-bottom: 2px solid var(--highlight-color);
  }
`;

const NavHeadingIcon = styled(NavHeading)`
  font-size: var(--fs-md);
  margin-left: 20px;
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-md) * 1.2);
  }
`;

const NavText = styled.span`
  padding-left: 8px;
`;

export default Nav;
