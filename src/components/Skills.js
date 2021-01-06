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
import ArduinoLogo from '../img/Arduino_Logo.svg';
import PSpiceLogo from '../img/PSpice_Logo.svg';
import CLogo from '../img/C_Logo.svg';
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
};

const list = [
  {
    name: 'Javascript',
    logo: <FontAwesomeIcon icon={faJsSquare} />,
    external: false,
  },
  {
    name: 'CSS',
    logo: <FontAwesomeIcon icon={faCss3Alt} />,
    external: false,
  },
  {
    name: 'HTML',
    logo: <FontAwesomeIcon icon={faHtml5} />,
    external: false,
  },
  {
    name: 'React',
    logo: <FontAwesomeIcon icon={faReact} />,
    external: false,
  },
  {
    name: 'NodeJS',
    logo: <FontAwesomeIcon icon={faNodeJs} />,
    external: false,
  },
  {
    name: 'Arduino',
    logo: ArduinoLogo,
    external: true,
  },
  {
    name: 'Raspberry Pi',
    logo: <FontAwesomeIcon icon={faRaspberryPi} />,
    external: false,
  },
  {
    name: 'PSpice',
    logo: PSpiceLogo,
    external: true,
  },
  {
    name: 'Python',
    logo: <FontAwesomeIcon icon={faPython} />,
    external: false,
  },

  {
    name: 'C/C++',
    logo: CLogo,
    external: true,
  },
];

const Skills = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ triggerOnce: true });
  const skillControls = useAnimation();
  const [skillRef, skillInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (headingInView) {
      console.log('HELLO');

      headingControls.start('show');
    }
  }, [headingControls, headingInView]);

  useEffect(() => {
    if (skillInView) {
      console.log('HELLO2');

      skillControls.start('show');
    }
  }, [skillControls, skillInView]);

  return (
    <SkillsSection>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 210px 0px 210px 0px;
`;

const SkillsHeading = styled(motion.h1)`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  justify-content: left;
`;

const BreakLine = styled.svg`
  margin-left: 24px;
`;

export default Skills;
