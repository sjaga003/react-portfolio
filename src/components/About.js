import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Resume from '../files/Suhas_Jagannath_Resume.pdf';

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

const containerFadeInMobile = {
  show: {
    opacity: 1,
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

const About = ({ isMobile }) => {
  return (
    <AboutSection
      variants={isMobile ? containerFadeInMobile : containerFadeIn}
      initial="hidden"
      animate="show"
      id="AboutSection"
    >
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
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          initial="show"
          whileHover="hover"
          variants={resumeButtonHover}
        >
          View Resume
        </ResumeButton>
        <EmailButton
          href="mailto:suhas.jagannath@email.ucr.edu"
          target="_blank"
          rel="noopener noreferrer"
          initial="show"
          whileHover="hover"
          variants={emailButtonHover}
          onClick={() =>
            window.open('mailTo:suhas.jagannath@email.ucr.edu', '_blank')
          }
        >
          Contact Me
        </EmailButton>
      </motion.div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 00px 0px 300px 0px;
`;

const Hello = styled(motion.div)`
  color: var(--highlight-color);
  font-family: 'Fira Code', monospace;
  font-size: var(--fs-md);
  padding-bottom: 24px;
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-md) * 1.2);
  }
`;

const Name = styled(motion.div)`
  color: var(--heading-color);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: var(--fs-title);
  padding-bottom: 24px;
  @media (max-width: 575.98px) {
    font-size: var(--fs-title-m);
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-title) * 1.2);
  }
`;

const SubHeading = styled(motion.div)`
  padding-bottom: 24px;
  font-size: var(--fs-md);
  font-weight: 400;
  line-height: 28px;
  max-width: 700px;
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-md) * 1.2);
  }
`;

const EmailButton = styled(motion.a)`
  margin-right: 24px;
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 1rem 1.75rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 575.98px) {
    padding: 1rem 1rem;
    font-size: var(--fs-xs);
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-sm) * 1.2);
  }
`;

const ResumeButton = styled(EmailButton)`
  background: var(--highlight-color);
  color: var(--bg-color);
`;

export default About;
