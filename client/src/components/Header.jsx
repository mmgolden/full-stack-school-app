import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Flex from './Flex';

const Header = () => (
  <Topbar>
    <div className="container">
      <Flex
        row
        spaceBetween
        center
      >
        <Logo>Courses</Logo>
        <nav>
          <a className="signup" href="sign-up.html">Sign Up</a>
          <a className="signin" href="sign-in.html">Sign In</a>
        </nav>
      </Flex>
    </div>
  </Topbar>
);

const Topbar = styled.div`
  background: ${theme.primaryColor};
  padding: 20px 0;
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  padding: 0 15px;
  margin: 0;
`;

export default Header;
