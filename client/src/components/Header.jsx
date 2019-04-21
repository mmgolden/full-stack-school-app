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
            <TopbarIcon icon="user-plus" size="sm" />
            Sign Up
          </a>
          <a className="signin" href="sign-in.html">
            <TopbarIcon icon="sign-in-alt" size="sm" />
            Sign In
          </a>
        </nav>
      </Flex>
    </Container>
  </Topbar>
);

const Topbar = styled.div`
  background: ${theme.primaryColor};
  background: ${theme.primaryGradient};
  padding: 20px 0;
  margin-bottom: 30px;

  a {
    color: #fff;
    padding: 0 10px;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  padding: 0 15px;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const TopbarIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default Header;
