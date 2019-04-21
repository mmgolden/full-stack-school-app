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
    {newCourse
      ? (
        <h3>
          <PlusIcon icon="plus" size="sm" />
          New Course
        </h3>
      )
      : (
        <>
          <h4>{label}</h4>
          <h3>{title}</h3>
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
  border-radius: 2px;
  padding: 30px;
  margin-bottom: 30px;
  min-height: 107px;
  box-sizing: border-box;
  min-width: 300px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);
  background: ${props => (props.newCourse ? theme.primaryGradient : '#fff')};
  align-items: ${props => (props.newCourse ? 'center' : 'flex-start')};

  h4 {
    color: #bababa;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 0.875rem;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 300;
    transition: color 0.3s;
    color: ${props => (props.newCourse ? '#fff' : theme.primaryFontColor)};
  }

  &:hover {
    h3 {
      color: ${props => (props.newCourse ? 'rgba(255,255,255,0.7)' : '#444')};
    }
    h4 {
      color: #a8a8a8;
    }
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;

export default Card;
