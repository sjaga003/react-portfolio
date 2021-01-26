import React, { useEffect } from 'react';
import Project from './Project';
import defaultImage from '../images/default_project.png';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TheCovidTracker from '../images/the_covid_tracker.png';
import AirQualityVisualizer from '../images/air_quality_visualizer.png';
import CovidCube from '../images/covid_cube.png';

const containerFadeIn = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      staggerChildren: 0.2,
      when: 'beforeChildren',
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

const buttonHover = {
  show: {
    background: 'var(--button-default)',
  },
  hover: {
    background: 'var(--button-hovered)',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const list = [
  {
    title: 'The Covid Tracker',
    description: (
      <span>
        A simple and clean way to view COVID-19 data at a glance. Built in 12
        hours and given CutieHack 2020's{' '}
        <span className="highlight"> Best UI/UX Hack Award</span>. Includes a
        daily case increase data visualization and the ability to view
        historical COVID-19 data.
      </span>
    ),
    technology: 'React ⸱ Chart.js ⸱ Netlify ⸱ COVID Tracking API',
    image: TheCovidTracker,
    github: 'https://github.com/sjaga003/TheCovidTracker',
    live: 'https://silly-knuth-d69f04.netlify.app/',
  },
  {
    title: 'Covid Puzzle Cube',
    description: (
      <span>
        An embedded system puzzle box that educated users on COVID‑19
        precautions in a fun and interactive way. Includes 5 puzzles with covid
        covid themed precautions as solutions. Uses{' '}
        <span className="highlight">multiple Ardunios and Raspberry Pis</span>{' '}
        to communicate with each other and to a mobile app.
      </span>
    ),
    technology: 'Raspberry Pi ⸱ Arduino ⸱ Bluetooth  ⸱ Python ⸱ C++',
    image: CovidCube,
    github: 'https://github.com/sjaga003/CovidCube',
    live: 'https://www.youtube.com/watch?v=7beyGCJO7LQ',
  },
  {
    title: 'Air Quality Visualizer',
    description: (
      <span>
        The Air Quality Visualizer was originally built when there were massive
        wildfires in California, and the air quality was difficult to keep track
        of. The air quality data is pulled from an API and the visualizer
        corresponds to the current quality rating.
      </span>
    ),
    technology: 'React ⸱ HTML ⸱ CSS ⸱ Air Now API',
    image: AirQualityVisualizer,
    github: 'https://github.com/sjaga003/AirQualityVisualizer',
    live: 'https://pensive-brahmagupta-1d2112.netlify.app/',
  },
];

const Projects = ({ isMobile, isModalOpen, setIsModalOpen }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <ProjectsSection id="ProjectsSection">
      <ProjectsHeading
        ref={ref}
        variants={containerFadeIn}
        initial="hidden"
        animate={controls}
      >
        Some of My Work
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
      </ProjectsHeading>
      <ProjectsContainer>
        {list.map((project, index) => {
          return (
            <Project
              isMobile={isMobile}
              key={index}
              index={index}
              project={list[index]}
            />
          );
        })}
      </ProjectsContainer>
      <SeeMoreButton
        onClick={() => {
          if (typeof window !== `undefined`) {
            setIsModalOpen(true);
            document
              .getElementById('ModalContainer')
              .setAttribute('style', 'visibility: unset');
          }
        }}
        variants={buttonHover}
        initial="show"
        whileHover="hover"
      >
        View All Projects
      </SeeMoreButton>
    </ProjectsSection>
  );
};

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 150px 0px 100px 0px;
  width: 100%;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectsContainer = styled(motion.div)`
  & > *:last-child {
    padding-bottom: 130px;
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    justify-content: center;
  }
`;

const ProjectsHeading = styled(motion.h1)`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
  /* &::after {
    content: '';
    display: block;
    position: relative;
    height: 2px;
    width: 500px;
    margin-left: 15px;
    background: var(--heading-color);
  } */
  @media (max-width: 575.98px) {
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

const SeeMoreButton = styled(motion.button)`
  margin-right: 48px;
  border: 2px solid var(--highlight-color);
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 1rem 1.75rem;
  font-size: var(--fs-sm);
  font-weight: 600;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin-right: 0;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-sm) * 1.2);
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

export default Projects;
