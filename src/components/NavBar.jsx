import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logoLumapple.svg';

const StyledNavBar = styled.div`
  nav {
    line-height: 60px;
  }
  img {
    vertical-align: middle;
    height: 37px;
  }
  .logo {
    margin-left: 20px;
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <nav>
        <div className="logo">
          <img src={Logo} />
        </div>
      </nav>
    </StyledNavBar>
  );
}
