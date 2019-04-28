import React from 'react';
import styled from 'styled-components';

// Styles the forms
const FormContainer = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const Form = styled(FormContainer)`
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);

  h1 {
    margin-top: 0;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
      margin-bottom: 15px;
      background: #fff;
      border: 1px solid #d0d0d0;
      padding: 8px 12px;
      border-radius: 2px;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

export default Form;
