import React from 'react';
import styled from 'styled-components';

const ErrorContainer = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);

const Error = styled(ErrorContainer)`
  color: #d80a0a;
`;

export default Error;
