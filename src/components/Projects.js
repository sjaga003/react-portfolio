import React, { useState, useEffect } from 'react';
import Project from './Project';
import defaultImage from '../img/default_project.png';
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
    github: 'google.com',
    live: 'google.com',
  },
  {
    title: 'Project 2',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium dignissimos explicabo commodi,
      reprehenderit quo asperiores dolores ab ducimus laboriosam iste pariatur rem cumque sed adipisci molestiae voluptate ad repellat?`,
    technology: 'Technology1 ⸱ Technology 2 ⸱ Technology 3',
    image: defaultImage,
    github: 'google.com',
    live: 'google.com',
  },
  {
    title: 'Project 3',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium dignissimos explicabo commodi,
      reprehenderit quo asperiores dolores ab ducimus laboriosam iste pariatur rem cumque sed adipisci molestiae voluptate ad repellat?`,
    image: defaultImage,
    technology: 'Technology1 ⸱ Technology 2 ⸱ Technology 3',
    github: 'google.com',
    live: 'google.com',
  },
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <ProjectsSection>
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
          return <Project key={index} index={index} project={list[index]} />;
        })}
      </ProjectsContainer>
      <SeeMoreButton variants={buttonHover} initial="show" whileHover="hover">
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
`;

const ProjectsContainer = styled(motion.div)`
  & > *:last-child {
    padding-bottom: 130px;
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
`;

const BreakLine = styled.svg`
  margin-left: 24px;
`;

export default Projects;
