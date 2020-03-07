import React from 'react';
import Logo from './assets/logoLumapple.svg';
import SearchBar from '../SearchBar';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import StyledNavBar from './assets/StyledNavBar';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StyledSign from '../Sign/style';

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

        <div className="sell-now">
          <Link
            to="/vendez-maintenant"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ButtonAdd name="Vendez maintenant" />
          </Link>
        </div>

        <div className="search-bar">
          <SearchBar />
        </div>
        <StyledSign />
      </nav>
    </StyledNavBar>
  );
}
