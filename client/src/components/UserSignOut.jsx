import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Context } from './Context';

// Signs out the authenticated user and redirects the user to the default route
class UserSignOut extends Component {
  componentDidMount() {
    const { actions } = this.context;
    actions.signOut();
  }

  render() {
    return (<Redirect to="/" />);
  }
}

UserSignOut.contextType = Context;

export default UserSignOut;
