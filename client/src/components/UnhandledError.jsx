import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Container from './Container';
import Button from './Button';

// Display a message letting the user know that an unexpected error has occurred
const UnhandledErrorContainer = ({ className }) => (
  <div className={className}>
    <Header />
    <Container>
      <div>
        <h1>Error</h1>
        <p>Oops! Something did not go right.</p>
        <Button buttonType="link" link="/">
          <BackIcon icon="arrow-left" size="sm" />
          Return Home
        </Button>
      </div>
    </Container>
  </div>
);

const UnhandledError = styled(UnhandledErrorContainer)`
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default UnhandledError;
