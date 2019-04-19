import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    courses: [],
  };

  // Runs immediately after the App component is mounted
  componentDidMount() {
    this.getCourses();
  }

  // Get the courses from the API
  getCourses = () => {
    axios.get('http://localhost:5000/api/courses')
      .then((res) => {
        const courses = res.data;
        this.setState({ courses });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
