import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';
import Flex from './Flex';
import Button from './Button';
import Form from './Form';

// Provides the "Create Course" screen by rendering a form
class CreateCourse extends Component {
  state = {};

  render() {
    return (
      <Container>
        <CreateCourseForm>
          <h1>Create Course</h1>
          <form>
            <FormGrid>
              <div>
                <h4>Course</h4>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Course title..."
                  value=""
                  aria-label="Title"
                />
                <p>By Joe Smith</p>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Course description..."
                  aria-label="Description"
                />
              </div>
              <div>
                <h4>Estimated Time</h4>
                <input
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  placeholder="Hours"
                  value=""
                  aria-label="Estimated Time"
                />
                <h4>Materials Needed</h4>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  placeholder="List materials..."
                  aria-label="Materials Needed"
                />
              </div>
              <Flex row>
                <FormButton buttonType="submit">Create Course</FormButton>
                <FormButton buttonType="link" link="/" outline>Cancel</FormButton>
              </Flex>
            </FormGrid>
          </form>
        </CreateCourseForm>
      </Container>
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
