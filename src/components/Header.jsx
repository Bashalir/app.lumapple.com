import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <div>Header</div>
      </NavBar>
    </StyledHeader>
  );
}
