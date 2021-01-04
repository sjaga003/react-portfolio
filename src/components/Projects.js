import React, { useState } from 'react';
import Project from './Project';
import defaultImage from '../img/default_project.png';
import styled from 'styled-components';

const Projects = () => {
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

  return (
    <ProjectsSection>
      <ProjectsHeading>Some of My Work</ProjectsHeading>
      <ProjectsContainer>
        {list.map((project, index) => {
          return <Project key={index} index={index} project={list[index]} />;
        })}
      </ProjectsContainer>
      <SeeMoreButton>See More</SeeMoreButton>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 100px 0px;
`;

const ProjectsContainer = styled.div`
  & > *:last-child {
    padding-bottom: 130px;
  }
`;

const ProjectsHeading = styled.h1`
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

const SeeMoreButton = styled.button`
  margin-right: 48px;
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 16px 32px;
  font-size: var(--fs-sm);
  font-weight: 500;
  align-self: center;
`;

export default Projects;
