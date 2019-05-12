import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header';
import Container from './Container';
import Flex from './Flex';
import Form from './Form';
import Button from './Button';
import Error from './Error';
import { handleError } from '../helpers';

// Provides the "Sign Up" screen by rendering a form
class UserSignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    differentPasswords: false,
    error: {},
  };

  // Update the state based on user input
  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  signUp = () => {
    const {
      firstName, lastName, emailAddress, password, confirmPassword,
    } = this.state;
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/users',
      data: {
        firstName,
        lastName,
        emailAddress,
        password,
        confirmPassword,
      },
    })
      .then(() => {
        const { history } = this.props;
        history.push('/');
      })
      .catch((error) => {
        this.setState({
          error: error.response,
        });
        handleError(error, this.props);
      });
  }

  /*
  * Handles the form submission
  * @param {Object} event - The event object
  */
  handleSubmit = (event) => {
    const { password, confirmPassword } = this.state;
    event.preventDefault();
    if (password === confirmPassword) {
      this.setState({ differentPasswords: false });
      this.signUp();
    } else {
      this.setState({ differentPasswords: true });
    }
  }

  /*
  * Shows a message if there is a validation error
  * @returns {String} - The error message
  */
  showError = () => {
    const {
      firstName, lastName, emailAddress, password, confirmPassword, error,
    } = this.state;
    const { data: { message } } = error;
    if (firstName === '') { return 'Please provide a value for "First Name"'; }
    if (lastName === '') { return 'Please provide a value for "Last Name"'; }
    if (emailAddress === '') { return 'Please provide a value for "Email Address"'; }
    if (password === '') { return 'Please provide a value for "Password"'; }
    if (confirmPassword === '') { return 'Please confirm your password'; }
    if (message === 'Email address already exists') { return message; }
    if (message === 'User validation failed: emailAddress: A valid email address is required') {
      return 'Please provide a valid email address';
    }
    return null;
  }

  render() {
    const {
      firstName, lastName, emailAddress, password, confirmPassword, error, differentPasswords,
    } = this.state;
    return (
      <>
        <Header {...this.props} />
        <Container>
          <SignUpForm>
            <h1>Sign Up</h1>
            <Error>{differentPasswords && 'Passwords don\'t match'}</Error>
            <Error>{error.status === 400 && this.showError() }</Error>
            <form onSubmit={(event) => { this.handleSubmit(event); }}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                value={firstName}
                onChange={this.handleChange}
              />
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                value={lastName}
                onChange={this.handleChange}
              />
              <input
                id="emailAddress"
                name="emailAddress"
                type="text"
                placeholder="Email Address"
                aria-label="Email Address"
                value={emailAddress}
                onChange={this.handleChange}
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={this.handleChange}
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                aria-label="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
              />
              <Flex row>
                <FormButton buttonType="submit">Sign Up</FormButton>
                <FormButton buttonType="link" link="/" outline>Cancel</FormButton>
              </Flex>
            </form>
          </SignUpForm>
        </Container>
      </>
    );
  }
}

const SignUpForm = styled(Form)`
  max-width: 400px;
`;

const FormButton = styled(Button)`
  margin-right: 15px;
`;

export default UserSignUp;
