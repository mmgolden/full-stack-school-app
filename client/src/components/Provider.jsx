import React, { Component } from 'react';
import axios from 'axios';

// Create context
const Context = React.createContext();

// Provides context for the app
export class Provider extends Component {
  state = {};

  // componentDidMount() {
  //   this.signIn('joe@smith.com', 'joepassword');
  // }

  /*
  * Authenticates the user
  * @param {String} emailAddress - The email address for the user
  * @param {String} password - The password for the user
  * @returns {Object} Returns the authenticated user
  */
  signIn = (emailAddress, password) => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/users',
      auth: {
        username: emailAddress,
        password,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={{
        state: this.state,
      }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; //eslint-disable-line 
