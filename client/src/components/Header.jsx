import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Consumer } from './Context';
import theme from '../theme';
import Container from './Container';
import Flex from './Flex';

const isLoggedIn = user => user.firstName && user.lastName;
const isStoredUser = () => {
  const storedUser = window.localStorage.getItem('user');
  if (storedUser) { return storedUser.emailAddress && storedUser.password; }
  return null;
};

// Displays the top menu bar for the app
const Header = () => (
  <Topbar>
    <Container>
      <Flex row spaceBetween center>
        <Link to="/">
          <Logo>Courses</Logo>
        </Link>
        <Consumer>
          {({ user }) => (
            <nav>
              {isLoggedIn(user) || isStoredUser() ? (
                <>
                  <span>{`Welcome ${user.firstName} ${user.lastName}!`}</span>
                  <Link to="/signout">
                    <TopbarIcon icon="sign-out-alt" size="sm" />
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <TopbarIcon icon="user-plus" size="sm" />
                    Sign Up
                  </Link>
                  <Link to="/signin">
                    <TopbarIcon icon="sign-in-alt" size="sm" />
                    Sign In
                  </Link>
                </>
              )}
            </nav>
          )}
        </Consumer>
      </Flex>
    </Container>
  </Topbar>
);

const Topbar = styled.div`
  background: ${theme.primaryColor};
  background: ${theme.primaryGradient};
  padding: 20px 0;
  margin-bottom: 30px;

  span {
    color: #fff;
    padding: 0 10px;
  }

  a {
    color: #fff;
    padding: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const TopbarIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default Header;
