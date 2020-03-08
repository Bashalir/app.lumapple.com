import styled from 'styled-components'; //css

const StyledNavBar = styled.nav`
display:block;
margin: 0 auto;
    max-width:1066px;
  section {

    display: flex;
    flex-direction:row;
    line-height: 60px;
    justify-content:space-between;
    height: 60px;

  }

  .logo {img {
    vertical-align: middle;
    height: 37px;
    padding: 0 1vw 0 1vw;
    cursor:pointer;
  }}

  .sell-now {

    display:flex;
    justify-content:center;
align-items:center;
    order:2;
    padding: 0 1vw 0 0;
    cursor:pointer;
    a{
      text-decoration: none;
      color: inherit
    }
    span{
      font-size: ${({ theme }) => theme.fontsSize.primary};
    }
  }
  .search-bar {
    order:3;
    flex-grow:4;
    padding: 0 1vw 0 0;
  }

  .account {
    order:4;
 

  }
`;

export default StyledNavBar;
