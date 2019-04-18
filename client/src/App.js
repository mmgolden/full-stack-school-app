import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
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
    const { courses } = this.state;
    return (
      <ul>
        {courses.map(course => <li>{course.title}</li>)}
      </ul>
    );
  }
}

export default App;
