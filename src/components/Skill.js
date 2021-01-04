import React from 'react';
import styled from 'styled-components';

const Skill = ({ skill }) => {
  return (
    <SkillBox>
      {skill.external ? (
        <Logo>
          <ImageBox draggable={false} src={skill.logo} alt={skill.name} />
        </Logo>
      ) : (
        <Logo>{skill.logo}</Logo>
      )}

      <SkillName>{skill.name}</SkillName>
    </SkillBox>
  );
};

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: var(--secondary-color);
  border-radius: 8px;
  height: 175px;
  width: 155px;
`;

const ImageBox = styled.img`
  width: 90px;
  user-select: none;
`;

const Logo = styled.div`
  display: flex;
  font-size: 90px;
  user-select: none;
  height: 100%;
  align-items: center;
`;

const SkillName = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  font-weight: bold;
  padding: 0px 0px 10px 0px;
`;

export default Skill;
