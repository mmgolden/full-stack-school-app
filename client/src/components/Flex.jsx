import React from 'react';
import styled from 'styled-components';

/*
  Flex container for content used like this:
  <Flex [row || column]> child components go here </Flex>
*/
const FlexContainer = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const Flex = styled(FlexContainer)`
  display: flex;
  ${props => props.row && 'flex-direction: row;'};
  ${props => props.column && 'flex-direction: column;'};
  ${props => props.spaceBetween && 'justify-content: space-between;'};
  ${props => props.flexEnd && 'justify-content: flex-end'};
  ${props => props.center && 'align-items: center'};
`;

export default Flex;
