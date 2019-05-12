import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

// Displays an error message
const ErrorContainer = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);

const Error = styled(ErrorContainer)`
  color: ${theme.errorColor};
`;

export default Error;
