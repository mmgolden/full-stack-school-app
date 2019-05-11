import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Container from './Container';
import Button from './Button';

// Displays a message letting the user know that they can't access the requested page
const ForbiddenContainer = ({ className }) => (
  <div className={className}>
    <Header />
    <Container>
      <div>
        <h1>Forbidden</h1>
        <p>You do not have permissions to access the requested page.</p>
        <Button buttonType="link" link="/">
          <BackIcon icon="arrow-left" size="sm" />
          Return Home
        </Button>
      </div>
    </Container>
  </div>
);

const Forbidden = styled(ForbiddenContainer)`
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default Forbidden;
