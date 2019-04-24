import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faUserPlus, faSignInAlt, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';

// Font awesome library
library.add(faPlus, faUserPlus, faSignInAlt, faChevronLeft);

// Main container component
class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Header />
                <Courses />
              </>
            )}
          />
          <Route
            path="/courses/create"
            render={() => (
              <>
                <Header />
                <CreateCourse />
              </>
            )}
          />
          <Route
            path="/courses/:id/update"
            render={() => (
              <>
                <Header />
                <UpdateCourse />
              </>
            )}
          />
          <Route
            path="/courses/:id"
            render={() => (
              <>
                <Header />
                <CourseDetail />
              </>
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <>
                <Header />
                <UserSignIn />
              </>
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <>
                <Header />
                <UserSignUp />
              </>
            )}
          />
          <Route
            path="/signout"
            render={() => {}}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
