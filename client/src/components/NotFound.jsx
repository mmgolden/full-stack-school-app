import React from 'react';

import Header from './Header';
import Container from './Container';

// Displays a not found message
const NotFound = () => (
  <>
    <Header />
    <Container>
      <div>
        <h1>Not Found</h1>
        <p>Sorry! We couldn't find the page you're looking for.</p>
      </div>
    </Container>
  </>
);

export default NotFound;
