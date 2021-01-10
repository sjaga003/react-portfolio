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
          <GithubIcon>
            <FontAwesomeIcon icon={faGithub} />
          </GithubIcon>
          <LiveIcon>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </LiveIcon>
        </Icons>
      </LinksCell>
    </TableRow>
  );
};

const TableRow = styled(motion.tr)``;

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
`;

const Technology = styled.span`
  display: inline-block;
  white-space: pre;
`;

const GithubIcon = styled.div``;

const LiveIcon = styled.div`
  margin-left: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--fs-lg);
`;

export default MatrixRow;
