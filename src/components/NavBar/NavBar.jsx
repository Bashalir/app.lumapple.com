import React from 'react';
import Logo from './assets/logoLumapple.svg';
import SearchBar from '../SearchBar';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import StyledNavBar from './assets/StyledNavBar';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {
  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <StyledNavBar>
      <nav>
        <div>
          <img
            className="logo"
            src={Logo}
            onClick={() => {
              handleClick('/');
            }}
          />
        </div>

        <div
          className="sell-now"
          onClick={() => {
            handleClick('/vendez-maintenant');
          }}
        >
          <ButtonAdd name="Vendez maintenant" />
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
