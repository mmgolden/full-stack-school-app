import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Container from './Container';
import Button from './Button';

// Displays a not found message
const NotFoundContainer = ({ className }) => (
  <div className={className}>
    <Header />
    <Container>
      <div>
        <h1>Not Found</h1>
        <p>Sorry! We couldn't find the page you're looking for.</p>
        <Button buttonType="link" link="/">
          <BackIcon icon="arrow-left" size="sm" />
          Return Home
        </Button>
      </div>
    </Container>
  </div>
);

const NotFound = styled(NotFoundContainer)`
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default NotFound;
