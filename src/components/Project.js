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

const Project = ({ index, project, isMobile }) => {
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
          <ImageContainer
            variants={containerHover}
            whileHover={isMobile ? '' : 'hover'}
          >
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
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    flex-direction: column;
    justify-content: center;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectImage = styled(motion.img)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14.5408px;
  object-fit: cover;
  width: inherit;
  height: inherit;
  user-select: none;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    filter: contrast(1) brightness(30%);
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ImageBackground = styled.div`
  border: var(--highlight-color) 2px solid;
  width: 390px;
  height: 290px;
  border-radius: 14.5408px;
  margin-top: 5px;
  position: absolute;
  z-index: -1;
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

const ImageContainer = styled(motion.div)`
  display: flexbox;
  width: 390px;
  height: 300px;
  @media (max-width: 575.98px) {
    width: 80vw;
    height: 60vh;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 80vw;
    height: 75vh;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  &:hover {
    cursor: pointer;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 80px;
  z-index: 2;
  @media (max-width: 575.98px) {
    height: 60vh !important;
    width: 70vw !important;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    position: absolute;
    margin-left: 0px;
    height: 40vh;
    width: 60vw;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectInfo2 = styled(ProjectInfo)`
  margin-right: 80px;
  margin-left: 0px;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin-right: 0px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectTitle = styled.h2`
  color: var(--heading-color);
  font-size: var(--fs-xl);
  padding-bottom: 8px;
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xl) * 1.2);
  }
`;

const ProjectDescription = styled.div`
  font-size: var(--fs-sm);
  padding-bottom: 8px;
  line-height: 22px;
  width: 450px;
  @media (max-width: 575.98px) {
    width: inherit;
    height: inherit;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: inherit;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: inherit;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-sm) * 1.2);
    line-height: unset;
  }
`;

const ProjectTechnology = styled.div`
  font-family: 'Fira Code', monospace;
  padding-bottom: 8px;
  font-size: var(--fs-xs);
  color: var(--highlight-color);
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xs) * 1.2);
  }
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
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-md) * 1.2);
  }
`;

export default Project;
