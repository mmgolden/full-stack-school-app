import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Consumer } from './Context';
import Header from './Header';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';
import Form from './Form';

// Provides the "Create Course" screen by rendering a form
class CreateCourse extends Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    error: {},
  };

  // Title input ref
  titleRef = React.createRef();

  // Description text area ref
  descRef = React.createRef();

  // Estimate time input ref
  timeRef = React.createRef();

  // Materials text area ref
  materialsRef = React.createRef();

  /*
  * Creates a new course
  * @param {String} emailAddress - The email address for the current user
  * @param {String} password - The password for the current user
  */
  createCourse = (emailAddress, password) => {
    const {
      title, description, estimatedTime, materialsNeeded,
    } = this.state;
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/courses',
      auth: {
        username: emailAddress,
        password,
      },
      data: {
        title,
        description,
        estimatedTime,
        materialsNeeded,
      },
    })
      .then(() => {
        const { history } = this.props;
        history.push('/');
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({
          error: error.response,
        });
      });
  }

  // Update the state based on user input
  handleChange = () => {
    this.setState({
      title: this.titleRef.current.value,
      description: this.descRef.current.value,
      estimatedTime: this.timeRef.current.value,
      materialsNeeded: this.materialsRef.current.value,
    });
  }

  /*
  * Handles the form submission
  * @param {Object} event - The event object
  * @param {String} emailAddress - The email address for the current user
  * @param {String} password - The password for the current user
  */
  handleSubmit = (event, emailAddress, password) => {
    event.preventDefault();
    this.createCourse(emailAddress, password);
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <Header />
        <Container>
          <CreateCourseForm>
            <h1>Create Course</h1>
            <Consumer>
              {({ user }) => (
                <form onSubmit={(event) => {
                  this.handleSubmit(event, user.emailAddress, user.password);
                }}
                >
                  <FormGrid>
                    <div>
                      <h4>Course</h4>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Course title..."
                        aria-label="Title"
                        ref={this.titleRef}
                        onChange={this.handleChange}
                      />
                      <p>By Joe Smith</p>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Course description..."
                        aria-label="Description"
                        ref={this.descRef}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <h4>Estimated Time</h4>
                      <input
                        id="estimatedTime"
                        name="estimatedTime"
                        type="text"
                        placeholder="Hours"
                        aria-label="Estimated Time"
                        ref={this.timeRef}
                        onChange={this.handleChange}
                      />
                      <h4>Materials Needed</h4>
                      <textarea
                        id="materialsNeeded"
                        name="materialsNeeded"
                        placeholder="List materials..."
                        aria-label="Materials Needed"
                        ref={this.materialsRef}
                        onChange={this.handleChange}
                      />
                    </div>
                    <Flex row>
                      <FormButton buttonType="submit">Create Course</FormButton>
                      <FormButton buttonType="link" link="/" outline>Cancel</FormButton>
                    </Flex>
                  </FormGrid>
                </form>
              )}
            </Consumer>
          </CreateCourseForm>
        </Container>
      </>
    );
  }
}

const CreateCourseForm = styled(Form)`
  h4 {
    color: #bababa;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.125rem;
    text-transform: uppercase;
  }

  textarea {
    min-height: 200px;
  }

  p {
    margin-top: 0;
    font-size: 1.125rem;
  }
`;

const FormGrid = styled.div`
  display: grid;

  @media (min-width:768px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const FormButton = styled(Button)`
  margin-right: 15px;
`;

export default withRouter(CreateCourse);
