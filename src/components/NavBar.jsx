import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logoLumapple.svg';
import SearchBar from './SearchBar';
import ButtonAdd from './ButtonAdd/ButtonAdd';




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

  .logo {
    vertical-align: middle;
    height: 37px;
    padding: 0 1vw 0 1vw;
  }

  .create-posting {
    display:flex;
    justify-content:center;
align-items:center;
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
        <div >
          <img className="logo" src={Logo} />
        </div>
        <div className="create-posting">
        <ButtonAdd name="Déposer une annonce"/>
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
