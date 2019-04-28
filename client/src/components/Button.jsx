import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../theme';

/*
* Displays a button depending on the type
*
* Usage:
* <Button buttonType=["button" || "submit" || "link"] [link="/"] [outline]>
*   Button name goes here
* </Button>
*/
const PageButton = ({
  children,
  className,
  buttonType = 'button',
  link,
}) => {
  let renderedButton;
  if (buttonType === 'button') {
    renderedButton = <button className={className} type="button">{children}</button>;
  } else if (buttonType === 'submit') {
    renderedButton = <button className={className} type="submit">{children}</button>;
  } else if (buttonType === 'link') {
    renderedButton = <Link className={className} to={link} role="button">{children}</Link>;
  }

  return (renderedButton);
};

const Button = styled(PageButton)`
  display: inline-block;
  border: 1px solid ${theme.primaryColor};
  padding: 10px 15px;
  border-radius: 2px;
  transition: all 0.3s;
  background: ${props => (props.outline ? '#fff' : theme.primaryColor)};
  color: ${props => (props.outline ? theme.primaryColor : '#fff')};

  &:hover {
    color: ${props => (props.outline ? theme.primaryHoverColor : 'rgba(255, 255, 255, 0.7)')};
    border-color: ${props => (props.outline ? theme.primaryHoverColor : theme.primaryColor)};
  }
`;

export default Button;
