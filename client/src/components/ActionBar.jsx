import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../theme';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';

// Displays action buttons at the top of the page
const ActionBar = ({ id }) => (
  <TopActionBar>
    <Container>
      <Flex row spaceBetween center>
        <BackButton href="/courses" role="button">
          <BackIcon icon="chevron-left" size="sm" />
          Return to List
        </BackButton>
        <ActionButton link={`/courses/${id}/update`} buttonType="link">Update Course</ActionButton>
        <ActionButton link={`/courses/${id}`} buttonType="link" outline>Delete Course</ActionButton>
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

const ActionButton = styled(Button)`
  margin-left: 15px;
`;

export default ActionBar;
