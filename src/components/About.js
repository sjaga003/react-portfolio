import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <Hello>Hello, my name is</Hello>
      <Name>Suhas Jagannath</Name>
      <SubHeading>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui facere
        debitis ut tempore fugit. Magni vero voluptas quia nesciunt asperiores
        explicabo laudantium deleniti amet animi, necessitatibus reprehenderit
        ratione illum provident beatae nemo, soluta architecto dolores.
      </SubHeading>
      <div>
        <EmailButton>Contact Me</EmailButton>
        <ResumeButton>View Resume</ResumeButton>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 210px 0px 210px 0px;
  min-height: 100vh;
`;

const Hello = styled.div`
  color: var(--highlight-color);
  font-family: 'Fira Code', monospace;
  font-size: 24px;
  padding-bottom: 24px;
`;

const Name = styled.div`
  color: var(--heading-color);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 64px;
  padding-bottom: 24px;
`;

const SubHeading = styled.div`
  padding-bottom: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

const EmailButton = styled.button`
  margin-right: 48px;
  border: 1px solid #3ea0e6;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: var(--highlight-color);
  background: none;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
`;

const ResumeButton = styled(EmailButton)`
  background: var(--highlight-color);
  color: var(--bg-color);
`;

export default About;
