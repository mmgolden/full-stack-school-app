import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faUserPlus, faSignInAlt, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import PrivateRoute from './PrivateRoute';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import UserSignOut from './UserSignOut';
import NotFound from './NotFound';

// Font awesome library
library.add(faPlus, faUserPlus, faSignInAlt, faChevronLeft);

// Main container component
class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Courses} />
          <PrivateRoute path="/courses/create" component={CreateCourse} />
          <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/signin" component={UserSignIn} />
          <Route path="/signup" component={UserSignUp} />
          <Route path="/signout" component={UserSignOut} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
