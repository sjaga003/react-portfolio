import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faReact,
  faNodeJs,
  faRaspberryPi,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import Skill from './Skill';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const fillLine = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 0.5,
      when: `afterChildren`,
    },
  },
};

const cardVariant = {
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    x: 15,
    y: -15,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const list = [
  {
    name: 'Javascript',
    logo: <FontAwesomeIcon icon={faJsSquare} />,
  },
  {
    name: 'CSS',
    logo: <FontAwesomeIcon icon={faCss3Alt} />,
  },
  {
    name: 'HTML',
    logo: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    name: 'React',
    logo: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: 'NodeJS',
    logo: <FontAwesomeIcon icon={faNodeJs} />,
  },
  {
    name: 'Arduino',
    logo: (
      <svg
        width="0.875em"
        viewBox="0 0 126 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.8993 29.6174C62.8993 29.6174 76.9293 6.23486 95.6368 6.23486C108.498 6.23486 119.019 16.7561 119.019 29.6174C119.019 42.4786 108.496 52.9999 95.6368 52.9999C76.9293 52.9999 62.8993 29.6174 62.8993 29.6174ZM62.8993 29.6174C62.8993 29.6174 48.8693 52.9999 30.1618 52.9999C17.303 52.9999 6.7793 42.4786 6.7793 29.6174C6.7793 16.7561 17.303 6.23486 30.1618 6.23486C49.3378 6.23486 62.8993 29.6174 62.8993 29.6174Z"
          stroke="var(--text-color)"
          stroke-width="12"
          stroke-miterlimit="10"
        />
        <path
          d="M18.9785 24.7373H43.3785V34.4973H18.9785V24.7373ZM82.4185 24.7373H106.819V34.4973H82.4185V24.7373Z"
          fill="var(--text-color)"
        />
        <path
          d="M89.7402 17.4175H99.5002V41.8175H89.7402V17.4175Z"
          fill="var(--text-color)"
        />
      </svg>
    ),
  },
  {
    name: 'Raspberry Pi',
    logo: <FontAwesomeIcon icon={faRaspberryPi} />,
  },
  {
    name: 'PSpice',
    logo: (
      <svg
        width="0.875em"
        viewBox="0 0 101 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.0478 57.8528V44.6548L50.7794 38.0558L61.5109 44.6548V57.8528L50.7794 63.9441L40.0478 57.8528Z"
          fill="var(--text-color)"
        />
        <path
          d="M63.555 59.1218L50.7794 66.736V74.8578L69.9428 62.9289V50.2386L63.555 46.1776V59.1218Z"
          fill="var(--text-color)"
        />
        <path
          d="M38.0037 43.3858V56.3299L31.3604 52.269V39.3248L50.7794 28.1574V36.0253L38.0037 43.3858Z"
          fill="var(--text-color)"
        />
        <path
          d="M28.8052 38.0558V74.8578L20.1177 69.7817V32.7259L49.7573 14.8156V3.03171C-5.93352 7.64482 -12.7388 75.0617 33.0241 95.6706C33.4817 94.9273 34.2854 94.4011 35.4543 94.4018C39.4317 94.4043 39.1804 100.49 35.4543 100.493C33.6061 100.495 32.6128 98.9956 32.5665 97.4842C-15.8995 78.8753 -8.8368 5.15416 49.7573 1.06397V1H50.7794H51.8015V14.8156L81.4409 32.7259V69.7817L51.8015 87.9374V98.7157C103.124 97.1939 117.448 26.9864 67.7474 6.37306C67.2554 7.09317 66.448 7.59899 65.3436 7.59899C61.5108 7.59899 61.2553 1.50755 65.3436 1.50761C67.3877 1.50764 68.3459 3.03052 68.3139 4.55337L68.4097 4.29949C117.938 24.7354 108.387 98.3395 51.8015 100.961V101H50.7794H49.7573V87.9289L36.4706 79.6802V69.0203L50.7794 77.6497L72.7535 64.4517V38.0558L50.7794 24.8579L28.8052 38.0558Z"
          fill="var(--text-color)"
        />
        <path
          d="M49.7573 87.9289L36.4706 79.6802V69.0203L50.7794 77.6497L72.7535 64.4517V38.0558L50.7794 24.8579L28.8052 38.0558V74.8579L20.1177 69.7817V32.7259L49.7573 14.8156M49.7573 87.9289L50.7794 88.5634L51.8015 87.9374M49.7573 87.9289V101H50.7794M51.8015 87.9374L81.4409 69.7817V32.7259L51.8015 14.8156M51.8015 87.9374C51.8015 93.0387 51.8015 95.8987 51.8015 101H50.7794M50.7794 101C108.27 99.2233 118.235 24.8579 68.4097 4.29949L68.0265 5.31472L67.6432 6.32995C117.468 26.8883 103.16 97.1929 51.8015 98.7157M51.8015 14.8156L50.7794 14.198L49.7573 14.8156M51.8015 14.8156V1H50.7794M49.7573 14.8156V1H50.7794M50.7794 1C-8.75352 4.2994 -16.1799 78.7684 32.5672 97.4844M49.7631 3.03123C-5.93305 7.64015 -12.7404 75.061 33.0241 95.6706M40.0478 44.6548V57.8528L50.7794 63.9441L61.5109 57.8528V44.6548L50.7794 38.0558L40.0478 44.6548ZM50.7794 66.736L63.555 59.1218V46.1776L69.9428 50.2386V62.9289L50.7794 74.8579V66.736ZM38.0037 56.3299V43.3858L50.7794 36.0253V28.1574L31.3604 39.3248V52.269L38.0037 56.3299ZM65.3435 7.59899C69.1763 7.59899 69.4318 1.50767 65.3435 1.50761C61.2553 1.50755 61.5108 7.59899 65.3435 7.59899ZM35.4543 94.4018C39.4317 94.4043 39.1804 100.49 35.4543 100.493C31.7283 100.497 31.477 94.3994 35.4543 94.4018Z"
          stroke="var(--text-color)"
        />
      </svg>
    ),
  },
  {
    name: 'Python',
    logo: <FontAwesomeIcon icon={faPython} />,
  },

  {
    name: 'C/C++',
    logo: (
      <svg
        width="0.875em"
        viewBox="0 0 92 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87.2125 21.7423L50.5969 1.1691C47.8228 -0.389701 44.3769 -0.389701 41.6006 1.1691L4.98498 21.7423C2.18479 23.3163 0.443359 26.26 0.443359 29.4254V70.574C0.443359 73.7373 2.18261 76.681 4.98498 78.255L41.6006 98.8303C42.9877 99.6087 44.5443 100 46.0988 100C47.6532 100 49.2098 99.6108 50.5969 98.8303L87.2125 78.2572C90.0149 76.6788 91.7542 73.7351 91.7542 70.5718V29.4254C91.7542 26.26 90.0127 23.3163 87.2125 21.7423ZM46.0988 76.0874C31.713 76.0874 20.01 64.3844 20.01 49.9986C20.01 35.6128 31.713 23.9098 46.0988 23.9098C54.3167 23.9098 61.9151 27.7253 66.8437 34.2171L57.3213 39.7305C54.4559 36.5999 50.3882 34.7802 46.0988 34.7802C37.7069 34.7802 30.8803 41.6067 30.8803 49.9986C30.8803 58.3905 37.7069 65.2171 46.0988 65.2171C50.3882 65.2171 54.4559 63.3974 57.3213 60.2668L66.8437 65.7802C61.9151 72.2719 54.3167 76.0874 46.0988 76.0874ZM72.1876 52.1727H67.8394V56.5208H63.4913V52.1727H59.1432V47.8246H63.4913V43.4764H67.8394V47.8246H72.1876V52.1727ZM87.406 52.1727H83.0579V56.5208H78.7098V52.1727H74.3616V47.8246H78.7098V43.4764H83.0579V47.8246H87.406V52.1727Z"
          fill="var(--text-color)"
        />
      </svg>
    ),
  },
];

const Skills = ({ isMobile }) => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ triggerOnce: true });
  const skillControls = useAnimation();
  const [skillRef, skillInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (headingInView) {
      headingControls.start('show');
    }
  }, [headingControls, headingInView]);

  useEffect(() => {
    if (skillInView) {
      skillControls.start('show');
    }
  }, [skillControls, skillInView]);

  return (
    <SkillsSection id="SkillsSection">
      <SkillsHeading
        ref={headingRef}
        variants={containerFadeIn}
        initial="hidden"
        animate={headingControls}
      >
        Technologies I've Worked With
        <BreakLine
          width="520"
          height="2"
          viewBox="0 0 520 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={fillLine}
            d="M0.75 1H519.75"
            stroke="var(--heading-color)"
            strokeWidth="2"
          />
        </BreakLine>
      </SkillsHeading>

      <SkillsContainer
        ref={skillRef}
        variants={containerFadeIn}
        initial="hidden"
        animate={skillControls}
      >
        {list.map((skill, index) => {
          return (
            <Skill
              isMobile={isMobile}
              cardVariant={cardVariant}
              key={`skill ${index}`}
              skill={list[index]}
            />
          );
        })}
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  padding: 100px 0px 100px 0px;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 100%;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 100%;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const SkillsHeading = styled(motion.h1)`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
  @media (max-width: 575.98px) {
    text-align: center;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    justify-content: center;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    justify-content: center;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-heading) * 1.2);
  }
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  justify-content: left;
  @media (max-width: 575.98px) {
    grid-column-gap: 32px;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    justify-content: center;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    justify-content: center;
    width: 100%;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    justify-content: center;
    grid-template-columns: repeat(calc(150px * 1.2));
  }
`;

const BreakLine = styled.svg`
  margin-left: 24px;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    display: none;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    display: none;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

export default Skills;
