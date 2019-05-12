import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Flex from './Flex';
import Button from './Button';
import theme from '../theme';

const ModalContainer = ({
  className,
  message,
  title = 'Delete Course',
  actionName = 'Delete',
  action,
  hideModal,
}) => (
  <div className={className}>
    <ModalBody>
      <Flex row spaceBetween center>
        <h1>{title}</h1>
        <CloseIcon icon="times" size="lg" onClick={hideModal} />
      </Flex>
      <p>{message && `${message}`}</p>
      <Flex row justifyCenter>
        <Button
          buttonType="button"
          action={hideModal}
        >
          Cancel
        </Button>
        <DeleteButton
          buttonType="button"
          outline
          action={action}
        >
          {actionName}
        </DeleteButton>
      </Flex>
    </ModalBody>
  </div>
);

const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalBody = styled.div`
  position: relative;
  width: 95%;
  max-width: 420px;
  margin: 50px auto auto;
  padding: 10px 0 20px 0;
  background: #fff;
  border-radius: 0.25em;
  transition: .4s ease-out;
  text-align: center;

  h1 {
    margin: 0 0 0 20px;
    font-size: 1.25rem;
  }

  p {
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    padding: 30px 20px;
    margin: 5px 0 15px 0;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  padding: 10px;
`;

const DeleteButton = styled(Button)`
  color: ${theme.errorColor};
  border-color: ${theme.errorColor};
  margin-left: 20px;

  &:hover {
    color: ${theme.errorHoverColor};
    border-color: ${theme.errorHoverColor};
  }
`;

export default Modal;
