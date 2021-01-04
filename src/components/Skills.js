import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faReact,
  faNode,
  faNodeJs,
  faRaspberryPi,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import Skill from './Skill';
import ArduinoLogo from '../img/Arduino_Logo.svg';
import PSpiceLogo from '../img/PSpice_Logo.svg';
import CLogo from '../img/C_Logo.svg';
import styled from 'styled-components';

const Skills = () => {
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

  return (
    <SkillsSection>
      <SkillsHeading>Technologies I've Worked With</SkillsHeading>
      <SkillsContainer>
        {list.map((skill, index) => {
          return <Skill key={index} skill={list[index]} />;
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

const SkillsHeading = styled.h1`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
  &::after {
    content: '';
    display: block;
    position: relative;
    height: 2px;
    width: 500px;
    margin-left: 15px;
    background: var(--heading-color);
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  justify-content: center;
`;

export default Skills;
