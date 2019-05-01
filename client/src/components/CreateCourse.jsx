import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Consumer } from './Context';
import Header from './Header';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';
import Form from './Form';

// Provides the "Create Course" screen by rendering a form
class CreateCourse extends Component {
  state = {};

  // Title input ref
  titleRef = React.createRef();

  // Description text area ref
  descRef = React.createRef();

  // Estimate time input ref
  timeRef = React.createRef();

  // Materials text area ref
  materialsRef = React.createRef();

  createCourse = (emailAddress, password) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/courses',
      auth: {
        username: emailAddress,
        password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event, emailAddress, password) => {
    event.preventDefault();
    this.createCourse(emailAddress, password);
  }

  render() {
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
                      />
                      <p>By Joe Smith</p>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Course description..."
                        aria-label="Description"
                        ref={this.descRef}
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
                      />
                      <h4>Materials Needed</h4>
                      <textarea
                        id="materialsNeeded"
                        name="materialsNeeded"
                        placeholder="List materials..."
                        aria-label="Materials Needed"
                        ref={this.materialsRef}
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

export default CreateCourse;
