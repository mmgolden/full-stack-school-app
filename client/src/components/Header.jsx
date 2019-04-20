import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../theme';
import Container from './Container';
import Flex from './Flex';

// Displays the top menu bar for the app
const Header = () => (
  <Topbar>
    <Container>
      <Flex row spaceBetween center>
        <Logo>Courses</Logo>
        <nav>
          <a className="signup" href="sign-up.html">
            <FontAwesomeIcon
              icon="user-plus"
              size="sm"
            />
            {' '}
            Sign Up
          </a>
          <a className="signin" href="sign-in.html">
            <FontAwesomeIcon
              icon="sign-in-alt"
              size="sm"
            />
            {' '}
            Sign In
          </a>
        </nav>
      </Flex>
    </Container>
  </Topbar>
);

const Topbar = styled.div`
  background: ${theme.primaryColor};
  padding: 20px 0;
  margin-bottom: 30px;

  a {
    color: rgba(255, 255, 255, 0.5);
    padding: 0 10px;

    &:hover {
      color: #fff;
    }
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  padding: 0 15px;
  margin: 0;
`;

export default Header;
