import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import MatrixRow from './MatrixRow';

const List = [
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
  {
    year: 2020,
    title: 'Project 1',
    technology: ['React', 'Gatsby', 'Other'],
    github: 'https://google.com',
    live: 'https://google.com',
  },
];

const containerFadeIn = {
  show: {
    opacity: 1,
    y: 0,
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

const ProjectMatrix = ({ isModalOpen, setIsModalOpen, isMobile }) => {
  try {
    const element = document.getElementById('content');
    if (isModalOpen) {
      document.body.setAttribute('style', ` overflow: hidden; height: 100%;`);
    } else {
      document.body.setAttribute('style', 'overflow: unset');
      element.setAttribute('style', 'transition: all 0.3s');
    }
  } catch {}

  return (
    <Background
      id="ModalContainer"
      onClick={(e) => {
        if (e.target.id === 'cover') {
          console.log(e.target);
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
              Past Work
              <Exit
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
                    <TableHeading
                      style={
                        isMobile
                          ? { display: 'none' }
                          : { display: 'table-cell' }
                      }
                    >
                      Created With
                    </TableHeading>
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
                        isMobile={isMobile}
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
`;

const Exit = styled.span`
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
  width: 100%;
`;

const TableBody = styled(motion.tbody)``;

const TableContainer = styled.div`
  height: 88%;
  overflow-y: scroll;
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
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default ProjectMatrix;
