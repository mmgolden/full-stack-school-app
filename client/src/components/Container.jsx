import React from 'react';
import styled from 'styled-components';

// Container for content
const PageContainer = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const Container = styled(PageContainer)`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width:1300px) {
    padding: 0;
  }
`;

export default Container;
