import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';

// Provides the "Sign In" screen by rendering a form
class UserSignIn extends Component {
  state = {};

  render() {
    return (
      <Container>
        <SignUpForm>
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
              <FormButton buttonType="button" outline>Cancel</FormButton>
            </Flex>
          </form>
          <p>
            {'Don\'t have a user account? '}
            <a href="/signup">Click here</a>
            {' to sign up!'}
          </p>
        </SignUpForm>
      </Container>
    );
  }
}

const SignUpForm = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 400px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);

  h1 {
    margin-top: 0;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 15px;
      background: #fff;
      border: 1px solid #d0d0d0;
      padding: 8px 12px;
      border-radius: 2px;
    }
  }

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
