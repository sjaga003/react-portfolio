import React, { useEffect } from 'react';
import Project from './Project';
import defaultImage from '../images/default_project.png';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    background: 'rgba(62,160,230, 0)',
  },
  hover: {
    background: 'rgba(62,160,230, 0.15)',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const list = [
  {
    title: 'Project 1',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium dignissimos explicabo commodi,
       reprehenderit quo asperiores dolores ab ducimus laboriosam iste pariatur rem cumque sed adipisci molestiae voluptate ad repellat?`,
    technology: 'Technology1 ⸱ Technology 2 ⸱ Technology 3',
    image: defaultImage,
    github: 'https://www.google.com',
    live: 'https://www.test.com',
  },
  {
    title: 'Project 2',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium dignissimos explicabo commodi,
      reprehenderit quo asperiores dolores ab ducimus laboriosam iste pariatur rem cumque sed adipisci molestiae voluptate ad repellat?`,
    technology: 'Technology1 ⸱ Technology 2 ⸱ Technology 3',
    image: defaultImage,
    github: 'https://www.google.com',
    live: 'https://www.test.com',
  },
  {
    title: 'Project 3',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium dignissimos explicabo commodi,
      reprehenderit quo asperiores dolores ab ducimus laboriosam iste pariatur rem cumque sed adipisci molestiae voluptate ad repellat?`,
    image: defaultImage,
    technology: 'Technology1 ⸱ Technology 2 ⸱ Technology 3',
    github: 'https://www.google.com',
    live: 'https://www.test.com',
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
          setIsModalOpen(true);
          document
            .getElementById('ModalContainer')
            .setAttribute('style', 'visibility: unset');
        }}
        variants={buttonHover}
        initial="show"
        whileHover="hover"
      >
        See More
      </SeeMoreButton>
    </ProjectsSection>
  );
};

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 100px 0px;
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
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 1rem 1.75rem;
  font-size: var(--fs-sm);
  font-weight: 500;
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
