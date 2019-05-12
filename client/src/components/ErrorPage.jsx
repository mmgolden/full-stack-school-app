import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Container from './Container';
import Button from './Button';

// Displays an error page
const ErrorPageContainer = (props) => {
  const { className, title, message } = props;
  return (
    <div className={className}>
      <Header {...props} />
      <Container>
        <div>
          <h1>{title}</h1>
          <p>{message}</p>
          <Button buttonType="link" link="/">
            <BackIcon icon="arrow-left" size="sm" />
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

const ErrorPage = styled(ErrorPageContainer)`
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default ErrorPage;
