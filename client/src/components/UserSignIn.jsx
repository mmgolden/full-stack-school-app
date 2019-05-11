import React, { Component } from 'react';
import styled from 'styled-components';

import { Consumer } from './Context';
import theme from '../theme';
import Header from './Header';
import Container from './Container';
import Flex from './Flex';
import Form from './Form';
import Button from './Button';

// Provides the "Sign In" screen by rendering a form
class UserSignIn extends Component {
  state = {
    emailAddress: '',
    password: '',
  };

  // Email address input ref
  emailRef = React.createRef();

  // Password input ref
  passwordRef = React.createRef();

  // Update the state based on user input
  handleChange = () => {
    this.setState({
      emailAddress: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  /*
  * Handles the form submission
  * @param {Object} event - The event object
  * @param {Function} signIn - The sign in method from context
  */
  handleSubmit = (event, signIn) => {
    const { emailAddress, password } = this.state;
    const { history } = this.props;
    event.preventDefault();
    signIn(emailAddress, password, this.props);
    history.push('/');
  }

  render() {
    return (
      <Consumer>
        {({ actions }) => (
          <>
            <Header />
            <Container>
              <SignInForm>
                <h1>Sign In</h1>
                <form onSubmit={(event) => { this.handleSubmit(event, actions.signIn); }}>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    ref={this.emailRef}
                    onChange={this.handleChange}
                  />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    ref={this.passwordRef}
                    onChange={this.handleChange}
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
          </>
        )}
      </Consumer>
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
