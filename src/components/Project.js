import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled, { css } from 'styled-components';
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

      <ImageContainer
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        variants={containerHover}
        whileHover={isMobile ? '' : 'hover'}
        index={index}
      >
        <ImageBackground></ImageBackground>

        <ProjectImage
          draggable={false}
          src={project.image}
          alt={`Project ${index}`}
          variants={index % 2 ? projectHoverRight : projectHoverLeft}
        />
      </ImageContainer>

      <ProjectInfo index={index}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectTechnology>{project.technology}</ProjectTechnology>
        <ProjectIcons>
          <IconContainer
            href={project.github}
            target="_blank"
            whileHover={{ color: 'var(--highlight-color)' }}
          >
            <ProjectIcon icon={faGithub} />
          </IconContainer>
          <IconContainer
            href={project.live}
            target="_blank"
            whileHover={{ color: 'var(--highlight-color)' }}
          >
            <ProjectIcon icon={faExternalLinkAlt} />
          </IconContainer>
        </ProjectIcons>
      </ProjectInfo>
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
    padding-bottom: 100px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectImage = styled(motion.img)`
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  object-fit: cover;
  width: inherit;
  height: inherit;
  user-select: none;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    box-shadow: none;
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
  width: 510px;
  height: 310px;
  border-radius: 8px;
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

const ImageContainer = styled(motion.a)`
  display: flexbox;
  width: 515px;
  height: 320px;
  ${({ index }) =>
    index % 2
      ? css`
          order: 2;
        `
      : css`
          order: 1;
        `}
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 100%;
    height: 420px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  &:hover {
    cursor: ${(props) => (props.isMobile ? 'unset' : 'pointer')};
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 450px;
  z-index: 2;
  ${({ index }) =>
    index % 2
      ? css`
          order: 1;
          margin-right: 80px;
        `
      : css`
          order: 2;
          margin-left: 80px;
        `}
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    order: 2;
    margin: 20px 0px;
    margin-left: 0px !important;
    margin-right: 0px !important;
    max-width: 100%;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    ${({ index }) =>
      index % 2
        ? css`
            margin-right: 20px;
          `
        : css`
            margin-left: 20px;
          `}
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ProjectTitle = styled.h2`
  color: var(--heading-color);
  font-size: var(--fs-xl);
  padding-bottom: 8px;
  @media (max-width: 767.98px) {
    font-size: calc(var(--fs-xl) * 1.2);
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xl) * 1.2);
  }
`;

const ProjectDescription = styled.div`
  font-size: var(--fs-sm);
  padding-bottom: 8px;
  line-height: 22px;
  width: inherit;
  @media (max-width: 575.98px) {
    width: inherit;
    height: inherit;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    font-size: calc(var(--fs-sm) * 1.2);
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
  @media (max-width: 767.98px) {
    font-size: calc(var(--fs-xs) * 1.2);
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xs) * 1.2);
  }
`;

const ProjectIcons = styled.div``;

const IconContainer = styled(motion.a)`
  display: inline-block;
  cursor: pointer;
  margin-right: 12px;
  color: inherit;
`;

const ProjectIcon = styled(FontAwesomeIcon)`
  font-size: var(--fs-lg);
  @media (max-width: 767.98px) {
    font-size: calc(var(--fs-lg) * 1.2);
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-lg) * 1.2);
  }
`;

export default Project;
