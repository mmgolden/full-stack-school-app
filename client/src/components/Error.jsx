import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

const ErrorContainer = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);

const Error = styled(ErrorContainer)`
  color: ${theme.errorColor};
`;

export default Error;
