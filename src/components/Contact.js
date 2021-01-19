import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const containerFadeIn = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
  hidden: { opacity: 0, y: -100 },
};

const fillLine = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
};

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

const Contact = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ triggerOnce: true });

  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (headingInView) {
      headingControls.start('show');
    }
  }, [headingControls, headingInView]);

  return (
    <ContactSection id="ContactSection">
      <ContactHeading
        ref={headingRef}
        variants={containerFadeIn}
        initial="hidden"
        animate={headingControls}
      >
        <BreakLine
          width="280"
          height="2"
          viewBox="0 0 520 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(-1, 1)"
        >
          <motion.path
            variants={fillLine}
            d="M0.75 1H519.75"
            stroke="var(--heading-color)"
            strokeWidth="3"
          />
        </BreakLine>
        Get In Touch
        <BreakLine
          width="280"
          height="2"
          viewBox="0 0 520 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={fillLine}
            d="M0.75 1H519.75"
            stroke="var(--heading-color)"
            strokeWidth="3"
          />
        </BreakLine>
      </ContactHeading>
      <FormContainer>
        <form name="contact" method="POST" data-netlify="true">
          <NameBox>
            <Input
              type="text"
              name="name"
              required
              onChange={(e) => setNameText(e.target.value)}
              value={nameText}
            />
            <InputLabel>Name</InputLabel>
          </NameBox>
          <EmailBox>
            <Input
              type="email"
              name="email"
              required
              onChange={(e) => setEmailText(e.target.value)}
              value={emailText}
            />
            <InputLabel>Email</InputLabel>
          </EmailBox>
          <MessageBox>
            <MessageArea
              name="message"
              required
              onChange={(e) => setMessageText(e.target.value)}
              value={messageText}
            ></MessageArea>
            <InputLabel>Message</InputLabel>
          </MessageBox>
          <ButtonBox>
            <SendButton
              type="submit"
              variants={buttonHover}
              initial="show"
              whileHover="hover"
            >
              Send {'-->'}
            </SendButton>
          </ButtonBox>
        </form>
      </FormContainer>
    </ContactSection>
  );
};

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px 100px 0px;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 100%;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 100%;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const ContactHeading = styled(motion.h1)`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
  @media (max-width: 575.98px) {
    text-align: center;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    justify-content: center;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    justify-content: center;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
    font-size: calc(var(--fs-heading) * 1.2);
  }
`;

const BreakLine = styled.svg`
  margin: 0px 24px;
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    display: none;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    display: none;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 12px 10px;
  font-size: var(--fs-sm);
  color: var(--text-color);
  margin-bottom: 40px;
  border: 2px solid var(--highlight-color);
  border-radius: 8px;
  outline: none;
  background: transparent;
  transition: 0.2s ease;

  ${({ value }) =>
    value &&
    css`
      & ~ label {
        top: -23px;
        left: 6px;
        /* color: var(--highlight-color); */
      }
      &:not(:valid) ~ label {
        color: red;
      }
      & {
        border: 2px solid red;
        background: rgba(255, 0, 0, 0.15);
      }
      &:valid {
        border: 2px solid var(--highlight-color);
        background: transparent;
      }
    `};
`;

const InputLabel = styled(motion.label)`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 2px 0;
  font-size: var(--fs-sm);
  pointer-events: none;
  transition: 0.2s ease;
  z-index: 1;
`;

const FormContainer = styled(motion.div)`
  width: 60%;
  @media (max-width: 575.98px) {
    width: 90%;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    width: 90%;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 80%;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  @media (min-width: 2000px) {
    //Do something like this to increase font sizes for 4k
  }
`;

const NameBox = styled(motion.div)`
  position: relative;
`;

const EmailBox = styled(NameBox)``;

const MessageBox = styled(NameBox)``;

const MessageArea = styled(motion.textarea)`
  min-width: 100%;
  max-width: 100%;
  width: 575px;
  min-height: 259px;
  max-height: 60vh;
  height: 259px;
  padding: 10px 10px;
  font-size: var(--fs-sm);
  color: var(--text-color);
  margin-bottom: 30px;
  border: 2px solid var(--highlight-color);
  border-radius: 8px;
  outline: none;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  resize: none;
  ${({ value }) =>
    value &&
    css`
      & ~ label {
        top: -23px;
        left: 6px;
        /* color: var(--highlight-color); */
      }
    `};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.5rem;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--highlight-color);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-resizer {
    display: none;
  }
`;

const ButtonBox = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const SendButton = styled(motion.button)`
  margin-right: 48px;
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 0.75rem 1.75rem;
  font-size: var(--fs-sm);
  font-weight: 600;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 575.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin-right: 0;
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

export default Contact;
