import React, { Component } from 'react';
import axios from 'axios';

// Create context
export const Context = React.createContext();

// Provides context for the app
export class Provider extends Component {
  state = {
    user: JSON.parse(localStorage.getItem('user')),
  };

  /*
  * Authenticates the user
  * @param {String} emailAddress - The email address for the user
  * @param {String} password - The password for the user
  * @returns {Object} Returns the authenticated user
  */
  signIn = (emailAddress, password, props) => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/users',
      auth: {
        username: emailAddress,
        password,
      },
    })
      .then((res) => {
        this.setState({
          user: {
            ...res.data,
            emailAddress,
            password,
          },
        });

        // Add the user to localStorage
        window.localStorage.setItem('user', JSON.stringify({
          ...res.data,
          emailAddress,
          password,
        }));
      })
      .catch((error) => {
        const { status, statusText, data: { message } } = error.response;
        console.error(`${status} Error: ${statusText}, ${message}`);
        if (status === 500) {
          const { history } = props;
          history.push('/error');
        }
      });
  }

  // Remove the authenticated user and password from the global state
  signOut = () => {
    this.setState({
      user: {},
    });
    window.localStorage.removeItem('user');
  }

  render() {
    const { children } = this.props;
    const { user } = this.state;
    return (
      <Context.Provider value={{
        user,
        actions: {
          signIn: this.signIn,
          signOut: this.signOut,
        },
      }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; //eslint-disable-line 
