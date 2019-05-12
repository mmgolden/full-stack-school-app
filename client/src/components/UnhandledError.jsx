import React from 'react';

import ErrorPage from './ErrorPage';

// Display a message letting the user know that an unexpected error has occurred
const UnhandledError = props => (
  <ErrorPage
    title="Error"
    message="Oops! Something did not go right."
    {...props}
  />
);

export default UnhandledError;
