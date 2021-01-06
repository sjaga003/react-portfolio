import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const skillFadeIn = {
  show: {},
  hidden: {},
};

const Skill = ({ skill, cardVariant }) => {
  return (
    <SkillBox variants={cardVariant}>
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

const SkillBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: var(--secondary-color);
  border-radius: 8px;
  box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.7);
`;

const ImageBox = styled.img`
  width: var(--fs-skill-icons);
  user-select: none;
`;

const Logo = styled.div`
  display: flex;
  font-size: var(--fs-skill-icons);
  user-select: none;
  height: 100%;
  align-items: center;
  padding: 10px 0px 0px 0px;
`;

const SkillName = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: var(--fs-xs);
  font-weight: bold;
  padding: 10px 0px 10px 0px;
`;

export default Skill;
