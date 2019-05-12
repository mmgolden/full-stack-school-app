import React from 'react';

import ErrorPage from './ErrorPage';

// Displays a not found message
const NotFound = props => (
  <ErrorPage
    title="Not Found"
    message="Sorry! We couldn't find the page you're looking for."
    {...props}
  />
);

export default NotFound;
