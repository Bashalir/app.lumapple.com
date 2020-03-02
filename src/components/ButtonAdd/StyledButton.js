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


:hover {
  box-shadow: inset 4px 4px 11px ${({ theme }) => theme.colors.primaryDark},
            inset -4px -4px 11px ${({ theme }) => theme.colors.shadowLight};
}

:active{
  color:${({ theme }) => theme.colors.primaryDark};
  .logo-add {
    background-image: url('${AddActive}');
  }
}


  .logo-add {
    background-image: url('${Add}');
    background-repeat: no-repeat;
    background-size:contain;
    background-position:center;

    width:25px;
    height:25px;
    padding: 0 5px 0 15px;
    z-index:1;
  }
  .span-add{

    padding: 0 15px 0 0px;
    font-size:1.2em;
    text-align:center;
  }

`;

export default StyledButton;
