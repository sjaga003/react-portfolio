import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Skill = ({ skill, cardVariant, isMobile }) => {
  return (
    <SkillContainer variants={cardVariant}>
      <motion.div>
        <CardBackground></CardBackground>
        <SkillBox variants={cardVariant} whileHover={isMobile ? '' : 'hover'}>
          {skill.external ? (
            <Logo>
              <ImageBox draggable={false} src={skill.logo} alt={skill.name} />
            </Logo>
          ) : (
            <Logo>{skill.logo}</Logo>
          )}

          <SkillName>{skill.name}</SkillName>
        </SkillBox>
      </motion.div>
    </SkillContainer>
  );
};

const SkillContainer = styled(motion.div)``;

const SkillBox = styled(motion.div)`
  height: 113px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  border-radius: 8px;
  box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.7);
`;

const CardBackground = styled.div`
  border: var(--highlight-color) 2px solid;
  width: 125px;
  height: 105px;
  border-radius: 8px;
  position: absolute;
  z-index: -1;
  margin-top: 5px;
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
  user-select: none;
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-xs) * 1.2);
  }
`;

export default Skill;
