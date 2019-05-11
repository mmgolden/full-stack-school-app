import React from 'react';
import styled from 'styled-components';

const ModalContainer = ({ className }) => (
  <div className={className}>
    <div className="modal">
      Are you sure you want to delete?
    </div>
  </div>
);

const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  .modal {
    position: relative;
    width: 95%;
    max-width: 420px;
    margin: 50px auto auto;
    padding: 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.25em;
    transition: .4s ease-out;
    text-align: center;
  }
`;

export default Modal;
