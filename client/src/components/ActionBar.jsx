import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../theme';
import Container from './Container';
import Button from './Button';

// Displays action buttons at the top of the page
const ActionBar = ({
  authUser, courseOwner, id, showModal,
}) => {
  let authUserId;
  let courseOwnerId;
  if (authUser) { authUserId = authUser._id; }
  if (courseOwner) { courseOwnerId = courseOwner._id; }
  return (
    <TopActionBar>
      <Container>
        <FlexContainer>
          <BackButton to="/" role="button">
            <BackIcon icon="chevron-left" size="sm" />
          Return to List
          </BackButton>
          {authUserId === courseOwnerId && (
            <>
              <ActionButton link={`/courses/${id}/update`} buttonType="link">Update Course</ActionButton>
              <ActionButton
                buttonType="button"
                outline
                action={showModal}
              >
                Delete Course
              </ActionButton>
            </>
          )}
        </FlexContainer>
      </Container>
    </TopActionBar>
  );
};

const TopActionBar = styled.div`
  background: #fff;
  padding: 20px 0;
  margin-top: -30px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);
  margin-bottom: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width:768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BackButton = styled(Link)`
  color: ${theme.primaryColor};
  transition: color 0.3s;
  margin: 0 0 10px 0;

  &:hover {
    color: ${theme.primaryHoverColor};
  }

  @media (min-width:768px) {
    margin: 0 auto 0 0;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const ActionButton = styled(Button)`
  margin: 5px 0;

  @media (min-width:768px) {
    margin: 0 0 0 15px;
  }
`;

export default ActionBar;
