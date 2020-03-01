import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logoLumapple.svg';
import SearchBar from './SearchBar';

const StyledNavBar = styled.div`
  nav {
    display: flex;
    line-height: 60px;
  }
  img {
    vertical-align: middle;
    height: 37px;
  }
  .logo {
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <nav>
        <div className="logo">
          <img src={Logo} />
        </div>
        <SearchBar />
      </nav>
    </StyledNavBar>
  );
}
