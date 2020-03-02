import styled from 'styled-components'; //css
import Add from './assets/add.svg';
import AddActive from './assets/add-active.svg';

const StyledButton = styled.button`
display:flex;
line-height:1.7rem;
justify-content:center;
align-items:center;
align-content:center;
cursor:pointer;
border:0px;
border-radius: 19px;
font-family: ${({ theme }) => theme.fonts.primary};
font-weight:800;
background: ${({ theme }) => theme.colors.backgroundSecondary};
box-shadow:  4px 4px 7px ${({ theme }) => theme.colors.shadowDarker},
             -4px -4px 7px ${({ theme }) => theme.colors.shadowLight};
  color:${({ theme }) => theme.colors.neutralLighter};
padding:5px 0;
position:relative;
outline: 0;
::after{
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
  border-radius: 19px;
  box-shadow: inset 4px 4px 11px ${({ theme }) => theme.colors.primaryDark},
            inset -4px -4px 11px ${({ theme }) => theme.colors.shadowLight};
  transition: opacity 250ms;
}
:hover {
            ::after {
              opacity:1;
            }
}

:active{
  .span-add{

  ::after {opacity:1;}
  }
  .logo-add {

    ::after {opacity:1;}
  }
}


  .logo-add {
    background-image: url('${Add}');
    background-repeat: no-repeat;
    background-size:contain;
    background-position:center;

    position:relative;

    width:25px;
    height:25px;
    padding: 0 5px 0 15px;
    z-index:1;
    ::after{
      z-index:-1;
      content:"";
      position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
  background-image: url('${AddActive}');
  background-repeat: no-repeat;
    background-size:contain;
    background-position:center;
    transition: opacity 250ms;
    }
  }
  .span-add{

    padding: 0 15px 0 0px;
    font-size:1.2em;
    text-align:center;
    position:relative;
z-index:1;

    ::after{

      padding: 0 15px 0 0px;
    text-align:center;
      content:"Vendez maintenant";
      position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
      color:${({ theme }) => theme.colors.primaryDark};
      transition: opacity 250ms;
    }
  }

`;

export default StyledButton;
