import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import MatrixRow from './MatrixRow';

const List = [
  {
    year: 2021,
    title: 'Yum',
    technology: [
      'React',
      'Styled Components',
      'Framer Motion',
      'Recharts',
      'Node',
      'Express',
      'MongoDB',
    ],
    github: 'https://github.com/sjaga003/Yum_Food_Website',
    live: 'https://cranky-bhabha-60b7b6.netlify.app/',
  },
  {
    year: 2021,
    title: 'Personal Portfolio Website',
    technology: [
      'React',
      'Styled Components',
      'Framer Motion',
      'Gatsby',
      'Netlify',
    ],
    github: 'https://github.com/sjaga003/react-portfolio',
    live: 'https://www.suhasjagannath.com/',
  },
  {
    year: 2020,
    title: 'The Covid Tracker',
    technology: ['React', 'Chart.js', 'Netlify', 'COVID Tracking API'],
    github: 'https://github.com/sjaga003/TheCovidTracker',
    live: 'https://silly-knuth-d69f04.netlify.app/',
  },
  {
    year: 2020,
    title: 'Covid Puzzle Box',
    technology: ['Raspberry Pi', 'Arduino', 'Bluetooth', 'Python', 'C++'],
    github: 'https://github.com/sjaga003/CovidCube',
    live: 'https://www.youtube.com/watch?v=7beyGCJO7LQ',
  },
  {
    year: 2020,
    title: 'Air Quality Visualizer',
    technology: ['React', 'HTML', 'CSS', 'Air Now API'],
    github: 'https://github.com/sjaga003/AirQualityVisualizer',
    live: 'https://pensive-brahmagupta-1d2112.netlify.app/',
  },
  {
    year: 2019,
    title: 'Sentiment Analyzer',
    technology: [
      'Chrome Extension',
      'JQuery',
      'Chart.js',
      'Angular',
      'CSS',
      'HTML',
    ],
    github: 'https://github.com/sjaga003/CutieHack2019SentimentAnalyzer',
    live: '',
  },
  {
    year: 2019,
    title: 'Spotify Controller',
    technology: ['HTML', 'CSS', 'Python', 'Spotify API', 'Flask'],
    github: 'https://github.com/sjaga003/CitrusHack2019SpotifyController',
    live: '',
  },
];

const containerFadeIn = {
  show: {
    opacity: 1,
    y: 0,
    background: 'var(--secondary-color-hidden)',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    background: 'var(--secondary-color-visible)',
  },
};

const modalFadeIn = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hidden: {
    y: 2000,
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const blockVariant = {
  show: {
    display: 'block',
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.17,
      delayChildren: 2,
    },
  },
  hidden: {
    display: 'none',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.17,
      delayChildren: 2,
    },
  },
};

const ProjectMatrix = ({ isModalOpen, setIsModalOpen }) => {
  if (typeof document !== `undefined`) {
    try {
      const element = document.getElementById('content');
      if (isModalOpen) {
        document.body.setAttribute('style', ` overflow: hidden; height: 100%;`);
      } else {
        document.body.setAttribute('style', 'overflow: unset');
        element.setAttribute('style', 'transition: all 0.3s');
      }
    } catch {}
  }

  return (
    <Background
      id="ModalContainer"
      onClick={(e) => {
        if (e.target.id === 'cover') {
          setIsModalOpen(!isModalOpen);
        }
      }}
    >
      <Cover
        id="cover"
        inital="hidden"
        variants={blockVariant}
        animate={isModalOpen ? 'show' : 'hidden'}
      ></Cover>
      <motion.div>
        <Modal
          inital="hidden"
          variants={modalFadeIn}
          animate={isModalOpen ? 'show' : 'hidden'}
        >
          <Content>
            <MatrixHeading>
              All Projects
              <Exit
                onHoverStart={(event, info) => {
                  event.target.style.color = 'var(--highlight-color)';
                  event.target.style.transition = 'all 0.2s ease-in-out';
                }}
                onHoverEnd={(event, info) => {
                  event.target.style.color = 'unset';
                }}
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Exit>
            </MatrixHeading>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeading>Year</TableHeading>
                    <TableHeading>Title</TableHeading>
                    <TableHeading>Created With</TableHeading>
                    <TableHeading>Link</TableHeading>
                  </tr>
                </thead>
                <TableBody>
                  {List.map((project, index) => {
                    return (
                      <MatrixRow
                        key={index}
                        index={index}
                        project={List[index]}
                        containerFadeIn={containerFadeIn}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Content>
        </Modal>
      </motion.div>
    </Background>
  );
};

const Background = styled(motion.div)`
  visibility: hidden;
`;

const Cover = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  z-index: 41;
  width: 90vw;
  height: 90vh;
  border-radius: 16px;
  background: var(--bg-color);
  top: 5%;
  left: 5%;

  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 767.98px) {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0px;
  }
`;

const Exit = styled(motion.span)`
  cursor: pointer;
`;

const MatrixHeading = styled.div`
  font-size: var(--fs-heading);
  color: var(--heading-color);
  font-weight: 600;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0px auto;
`;

const TableBody = styled(motion.tbody)``;

const TableContainer = styled.div`
  height: 88%;
  overflow-y: auto;
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--text-color);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--secondary-color);
    border-radius: 8px;
  }
`;

const TableHeading = styled.th`
  text-align: left;
  padding: 10px;
  color: var(--heading-color);
  font-weight: 600;
  font-size: var(--fs-lg);
  max-width: 3px;
  display: table-cell;
  @media (max-width: 767.98px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default ProjectMatrix;
