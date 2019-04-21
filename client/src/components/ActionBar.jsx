import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Button from './Button';

// Displays action buttons at the top of the page
const ActionBar = () => (
  <TopActionBar>
    <Container>
      <Button>Update Course</Button>
    </Container>
  </TopActionBar>
);

const TopActionBar = styled.div`
  border-bottom: 1px solid #d0d0d0;
  background: #fff;
  padding: 20px 0;
  margin-top: -30px;
`;

export default ActionBar;
