import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blankVariant = {
  show: {
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    transition: {
      duration: 0.1,
    },
  },
};

const MatrixRow = ({ index, project, containerFadeIn }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  return (
    <TableRow
      ref={ref}
      variants={blankVariant}
      initial="hidden"
      animate={controls}
      onHoverStart={(event, info) => {
        event.target.style.backgroundColor = 'rgba(50, 58, 78, 0.6)';
      }}
      onHoverEnd={(event, info) => {
        event.target.style.backgroundColor = 'unset';
      }}
    >
      <YearCell>{project.year}</YearCell>
      <TitleCell>{project.title}</TitleCell>
      <TechnologyCell key={index}>
        {project.technology.map((tech, index) => {
          return (
            <Technology key={index}>
              {tech}
              {index === project.technology.length - 1 ? '' : ' ⸱ '}
            </Technology>
          );
        })}
      </TechnologyCell>
      <LinksCell>
        <Icons>
          {project.github && (
            <GithubIcon
              whileHover={{ color: 'var(--highlight-color)' }}
              href={project.github}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </GithubIcon>
          )}
          {project.live && (
            <LiveIcon
              whileHover={{ color: 'var(--highlight-color)' }}
              href={project.live}
              target="_blank"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </LiveIcon>
          )}
        </Icons>
      </LinksCell>
    </TableRow>
  );
};

const TableRow = styled(motion.tr)`
  border-radius: 4px;
  background: var(--bg-color);
`;

const standardCell = styled.td`
  padding: 10px;
  text-align: left;
  font-size: var(--fs-md);
`;
const YearCell = styled(standardCell)``;
const TitleCell = styled(standardCell)`
  max-width: 100px;
`;
const TechnologyCell = styled(standardCell)`
  max-width: 100px;
  font-family: 'Fira Code', monospace;
  display: table-cell;
  @media (max-width: 767.98px) {
    display: none;
  }
`;
const LinksCell = styled(standardCell)`
  max-width: 30px;
  /* width: 70px; */
`;

const Technology = styled.span`
  display: inline-block;
  white-space: pre;
`;

const GithubIcon = styled(motion.a)`
  color: inherit;
  cursor: pointer;
`;

const LiveIcon = styled(GithubIcon)`
  margin-left: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--fs-lg);
`;

export default MatrixRow;
