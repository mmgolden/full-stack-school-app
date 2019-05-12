import React from 'react';

import ErrorPage from './ErrorPage';

// Displays a message letting the user know that they can't access the requested page
const Forbidden = props => (
  <ErrorPage
    title="Forbidden"
    message="You do not have permissions to access the requested page."
    {...props}
  />
);

export default Forbidden;
