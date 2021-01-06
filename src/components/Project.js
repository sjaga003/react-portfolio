import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

const projectHoverLeft = {
  show: {
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    y: -20,
    x: 20,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const projectHoverRight = {
  show: {
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    y: -20,
    x: -20,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const containerHover = {
  show: {},
  hover: {},
};

const Project = ({ index, project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <ProjectContainer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerFadeIn}
    >
      {/* If index is even image on left side, if index is odd image on right side */}
      {!(index % 2) ? (
        <>
          <ImageContainer variants={containerHover} whileHover="hover">
            <ImageBackground></ImageBackground>

            <ProjectImage
              draggable={false}
              src={project.image}
              alt={`Project ${index}`}
              variants={projectHoverLeft}
            />
          </ImageContainer>

          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnology>{project.technology}</ProjectTechnology>
            <ProjectIcons>
              <IconContainer whileHover={{ color: 'var(--highlight-color)' }}>
                <ProjectIcon icon={faGithub} />
              </IconContainer>
              <IconContainer whileHover={{ color: 'var(--highlight-color)' }}>
                <ProjectIcon icon={faExternalLinkAlt} />
              </IconContainer>
            </ProjectIcons>
          </ProjectInfo>
        </>
      ) : (
        ''
      )}
      {index % 2 ? (
        <>
          <ProjectInfo2>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnology>{project.technology}</ProjectTechnology>
            <ProjectIcons>
              <IconContainer whileHover={{ color: 'var(--highlight-color)' }}>
                <ProjectIcon icon={faGithub} />
              </IconContainer>
              <IconContainer whileHover={{ color: 'var(--highlight-color)' }}>
                <ProjectIcon icon={faExternalLinkAlt} />
              </IconContainer>
            </ProjectIcons>
          </ProjectInfo2>
          <ImageContainer variants={containerHover} whileHover="hover">
            <ImageBackground></ImageBackground>
            <ProjectImage
              draggable={false}
              src={project.image}
              alt={`Project ${index}`}
              variants={projectHoverRight}
            />
          </ImageContainer>
        </>
      ) : (
        ''
      )}
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-bottom: 200px;
`;

const ProjectImage = styled(motion.img)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 14.5408px;
  object-fit: cover;
  width: 400px;
  height: 306px;

  user-select: none;
`;

const ImageBackground = styled.div`
  border: var(--highlight-color) 2px solid;
  width: 390px;
  height: 300px;
  border-radius: 14.5408px;
  margin-top: 5px;
  position: absolute;
`;

const ImageContainer = styled(motion.div)`
  display: flexbox;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 80px;
`;

const ProjectInfo2 = styled(ProjectInfo)`
  margin-right: 80px;
  margin-left: 0px;
`;

const ProjectTitle = styled.h2`
  color: var(--heading-color);
  font-size: var(--fs-xl);
  padding-bottom: 8px;
`;

const ProjectDescription = styled.div`
  font-size: var(--fs-sm);
  padding-bottom: 8px;
  line-height: 22px;
  width: 450px;
`;

const ProjectTechnology = styled.div`
  font-family: 'Fira Code', monospace;
  padding-bottom: 8px;
  font-size: var(--fs-xs);
  color: var(--highlight-color);
`;

const ProjectIcons = styled.div``;

const IconContainer = styled(motion.div)`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectIcon = styled(FontAwesomeIcon)`
  margin-right: 12px;
  font-size: var(--fs-md);
`;

export default Project;
