import styled from 'styled-components'; //css

const StyledNavBar = styled.div`
display:block;
margin: 0 auto;
    max-width:1066px;
  nav {

    display: flex;
    flex-direction:row;
    line-height: 60px;
    justify-content:space-between;

  }

  .logo {
    vertical-align: middle;
    height: 37px;
    padding: 0 1vw 0 1vw;
    cursor:pointer;
  }

  .sell-now {
    display:flex;
    justify-content:center;
align-items:center;
    order:2;
    padding: 0 1vw 0 1vw;
    cursor:pointer;
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

export default StyledNavBar;
