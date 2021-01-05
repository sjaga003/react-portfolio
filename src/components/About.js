import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const containerFadeIn = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
      delay: 1.2,
    },
  },
  hidden: { opacity: 0 },
};

const aboutFadeIn = {
  show: {
    opacity: [0.1, 1],
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
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

const emailButtonHover = {
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

const resumeButtonHover = {
  show: {
    background: 'rgba(62,160,230, 1)',
    color: 'var(--bg-color)',
  },
  hover: {
    background: 'rgba(62,160,230, 0.15)',
    color: 'var(--highlight-color)',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const About = () => {
  return (
    <AboutSection variants={containerFadeIn} initial="hidden" animate="show">
      <Hello variants={aboutFadeIn}>Hello, my name is</Hello>
      <Name variants={aboutFadeIn}>Suhas Jagannath</Name>
      <SubHeading variants={aboutFadeIn}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui facere
        debitis ut tempore fugit. Magni vero voluptas quia nesciunt asperiores
        explicabo laudantium deleniti amet animi, necessitatibus reprehenderit
        ratione illum provident beatae nemo, soluta architecto dolores.
      </SubHeading>
      <motion.div variants={aboutFadeIn}>
        <ResumeButton
          initial="show"
          whileHover="hover"
          variants={resumeButtonHover}
        >
          View Resume
        </ResumeButton>
        <EmailButton
          initial="show"
          whileHover="hover"
          variants={emailButtonHover}
        >
          Contact Me
        </EmailButton>
      </motion.div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  padding: 210px 0px 210px 0px;
  min-height: 100vh;
`;

const Hello = styled(motion.div)`
  color: var(--highlight-color);
  font-family: 'Fira Code', monospace;
  font-size: var(--fs-md);
  padding-bottom: 24px;
`;

const Name = styled(motion.div)`
  color: var(--heading-color);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: var(--fs-title);
  padding-bottom: 24px;
`;

const SubHeading = styled(motion.div)`
  padding-bottom: 24px;
  font-size: var(--fs-md);
  font-weight: 400;
  line-height: 28px;
  max-width: 700px;
`;

const EmailButton = styled(motion.button)`
  margin-right: 24px;
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 1rem 1.75rem;
  font-size: var(--fs-small);
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

const ResumeButton = styled(EmailButton)`
  background: var(--highlight-color);
  color: var(--bg-color);
`;

export default About;
