import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logoLumapple.svg';
import SearchBar from './SearchBar';




const StyledNavBar = styled.div`
display:block;
  nav {
    margin: 0 auto;
    max-width:1066px;
    display: flex;
    flex-direction:row;
    line-height: 60px;
    justify-content:space-between;

  }

  img {
    vertical-align: middle;
    height: 37px;
    padding: 0 1vw 0 1vw;
  }

  .create-posting {
    order:2;
    padding: 0 1vw 0 1vw;
  }
  .search-bar {
    order:3;
    flex-grow:4;
    padding: 0 1vw 0 1vw;
  }

  .account {
    order:4;
    padding: 0 1vw 0 1vw;
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <nav>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="create-posting">
        <button>Déposer une annonce</button>
        </div>
        <div className="search-bar">
        <SearchBar />
        </div>
        <div className="account">
        <button>Se connecter</button>
        </div>
      </nav>
    </StyledNavBar>
  );
}
