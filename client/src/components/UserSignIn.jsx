import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Container from './Container';
import Flex from './Flex';
import Form from './Form';
import Button from './Button';

// Provides the "Sign In" screen by rendering a form
class UserSignIn extends Component {
  state = {};

  render() {
    return (
      <Container>
        <SignInForm>
          <h1>Sign In</h1>
          <form>
            <input
              id="emailAddress"
              name="emailAddress"
              type="text"
              placeholder="Email Address"
              value=""
              aria-label="Email Address"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value=""
              aria-label="Password"
            />
            <Flex row>
              <FormButton buttonType="submit">Sign In</FormButton>
              <FormButton buttonType="link" link="/" outline>Cancel</FormButton>
            </Flex>
          </form>
          <p>
            {'Don\'t have a user account? '}
            <a href="/signup">Click here</a>
            {' to sign up!'}
          </p>
        </SignInForm>
      </Container>
    );
  }
}

const SignInForm = styled(Form)`
  max-width: 400px;

  p {
    margin-top: 20px;
    margin-bottom: 0;
  }

  a {
    color: ${theme.primaryColor};
    transition: color 0.3s;

    &:hover {
      color: ${theme.primaryHoverColor};
    }
  }
`;

const FormButton = styled(Button)`
  margin-right: 15px;
`;

export default UserSignIn;
