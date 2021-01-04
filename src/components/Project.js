import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Project = ({ index, list }) => {
  const currentProject = list[index];
  return (
    <ProjectContainer>
      {/* If index is even image on left side, if index is odd image on right side */}
      {!(index % 2) ? (
        <ProjectImage src={currentProject.image} alt={`Project ${index}`} />
      ) : (
        ''
      )}

      <ProjectInfo>
        <ProjectTitle>{currentProject.title}</ProjectTitle>
        <ProjectDescription>{currentProject.description}</ProjectDescription>
        <ProjectTechnology>{currentProject.technology}</ProjectTechnology>
        <ProjectIcons>
          <ProjectIcon icon={faGithub} />
          <ProjectIcon icon={faExternalLinkAlt} />
        </ProjectIcons>
      </ProjectInfo>
      {index % 2 ? (
        <ProjectImageRight
          src={currentProject.image}
          alt={`Project ${index}`}
        />
      ) : (
        ''
      )}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 200px;
`;

const ProjectImage = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 14.5408px;
  object-fit: cover;
  width: 400px;
  height: 306px;
  margin-right: 100px;
`;

const ProjectImageRight = styled(ProjectImage)`
  margin-left: 100px;
  margin-right: 0px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  color: var(--heading-color);
  font-size: 32px;
  padding-bottom: 8px;
`;

const ProjectDescription = styled.div`
  font-size: 16px;
  padding-bottom: 8px;
  line-height: 22px;
`;

const ProjectTechnology = styled.div`
  font-family: 'Fira Code', monospace;
  padding-bottom: 8px;
  font-size: 14px;
  color: var(--highlight-color);
`;

const ProjectIcons = styled.div``;

const ProjectIcon = styled(FontAwesomeIcon)`
  margin-right: 12px;
  font-size: 18px;
`;

export default Project;
