import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MatrixRow = ({ index, project, containerFadeIn, isMobile }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

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

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  return (
    <TableRow
      ref={ref}
      variants={containerFadeIn}
      initial="hidden"
      whileHover={{
        backgroundColor: 'rgba(50, 58, 78, 0.6)',
        transition: { type: 'tween', ease: 'anticipate' },
      }}
      animate={controls}
    >
      <YearCell>{project.year}</YearCell>
      <TitleCell>{project.title}</TitleCell>
      <TechnologyCell
        key={index}
        style={isMobile ? { display: 'none' } : { display: 'table-cell' }}
      >
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
          <GithubIcon
            whileHover={{ color: 'var(--highlight-color)' }}
            href={project.github}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </GithubIcon>
          <LiveIcon
            whileHover={{ color: 'var(--highlight-color)' }}
            href={project.live}
            target="_blank"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </LiveIcon>
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
`;
const YearCell = styled(standardCell)``;
const TitleCell = styled(standardCell)`
  max-width: 100px;
`;
const TechnologyCell = styled(standardCell)`
  max-width: 100px;
  font-family: 'Fira Code', monospace;
`;
const LinksCell = styled(standardCell)`
  max-width: 30px;
  width: 70px;
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
