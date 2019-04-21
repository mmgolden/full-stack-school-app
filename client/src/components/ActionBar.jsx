import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../theme';
import Container from './Container';
import Flex from './Flex';

// Displays action buttons at the top of the page
const ActionBar = ({ id }) => (
  <TopActionBar>
    <Container>
      <Flex row spaceBetween center>
        <BackButton href="/courses" role="button">
          <BackIcon icon="chevron-left" size="sm" />
          Return to List
        </BackButton>
        <Button href={`/courses/${id}/update`} role="button">Update Course</Button>
        <Button href={`/courses/${id}`} role="button" outline>Delete Course</Button>
      </Flex>
    </Container>
  </TopActionBar>
);

const TopActionBar = styled.div`
  background: #fff;
  padding: 20px 0;
  margin-top: -30px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  border: 1px solid ${theme.primaryColor};
  padding: 10px 15px;
  border-radius: 2px;
  margin-right: 20px;
  transition: all 0.3s;
  background: ${props => (props.outline ? '#fff' : theme.primaryColor)};
  color: ${props => (props.outline ? theme.primaryColor : '#fff')};

  &:hover {
    color: ${props => (props.outline ? theme.primaryHoverColor : 'rgba(255, 255, 255, 0.7)')};
    border-color: ${props => (props.outline ? theme.primaryHoverColor : theme.primaryColor)};
  }
`;

const BackButton = styled.a`
  margin-right: auto;
  color: ${theme.primaryColor};
  transition: color 0.3s;

  &:hover {
    color: ${theme.primaryHoverColor};
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default ActionBar;
