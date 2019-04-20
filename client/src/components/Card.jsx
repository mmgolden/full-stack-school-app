import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../theme';

// Displays a card for a course
const CourseCard = ({
  className,
  link,
  label,
  title,
  newCourse,
}) => (
  <a className={className} href={link}>
    {/*  Conditionally render the course card or the new course card */}
    {!newCourse
      ? (
        <>
          <h4>{label}</h4>
          <h3>{title}</h3>
        </>
      )
      : (
        <>
          <h3>
            <FontAwesomeIcon
              icon="plus"
              size="sm"
            />
            {' '}
            New Course
          </h3>
        </>
      )
    }
  </a>
);

const Card = styled(CourseCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  min-height: 107px;
  box-sizing: border-box;
  min-width: 300px;
  background: ${props => (props.newCourse ? '#eee' : theme.primaryColor)};
  align-items: ${props => (props.newCourse ? 'center' : 'flex-start')};

  h4 {
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 0.875rem;
  }

  h3 {
    font-size: 1.125rem;
    margin: 0;
    color: ${props => (props.newCourse ? '#999' : '#fff')};
  }
`;

export default Card;
