import React from 'react';
import Logo from './assets/logoLumapple.svg';
import SearchBar from '../SearchBar';
import AddButton from '../AddButton/index';
import StyledNavBar from './assets/StyledNavBar';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sign from '../Sign/index';

export default function NavBar() {
  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <StyledNavBar>
      <section>
        <div className="logo">
          <img
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
          <AddButton name="Vendez maintenant" />
        </div>

        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="account">
          <Sign />
        </div>
      </section>
    </StyledNavBar>
  );
}
