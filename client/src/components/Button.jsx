import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

const ActionButton = ({ children, className }) => (
  <button type="button" className={className}>
    {children}
  </button>
);

const Button = styled(ActionButton)`
  background: ${theme.primaryColor};
  border-color: ${theme.primaryColor};
  color: #fff;
  padding: 10px 15px;
  border-radius: 2px;
`;

export default Button;
