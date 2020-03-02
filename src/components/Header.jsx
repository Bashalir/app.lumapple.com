import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar/NavBar';

const StyledHeader = styled.div`
  width: 100vw;
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
