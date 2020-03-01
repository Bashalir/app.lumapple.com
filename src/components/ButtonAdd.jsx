import React from 'react';
import styled from 'styled-components';
import Add from './add.svg';



const StyledButton = styled.button`
display:flex;
line-height:1.7rem;
justify-content:center;
align-items:center;
align-content:center;
border:0px;
border-radius: 19px;
font-family: ${({ theme }) => theme.fonts.primary};
font-weight:800;
background: ${({ theme }) => theme.colors.backgroundSecondaryColor};
box-shadow:  4px 4px 7px #00ba4d,
             -4px -4px 7px #00d659;
  color:${({ theme }) => theme.colors.neutralLighter};
padding:5px 0;

  .logo-add {
padding: 0 5px 0 10px;
    width:25px;
    height:25px;
  }
  .span-add{

    padding: 0 10px 0 5px;

    text-align:center;
  }
`;

export default function ButtonAdd(props) {
  return (

    <StyledButton>
<img className='logo-add'src={Add}/>
<span className='span-add'>{props.name}</span>
    </StyledButton>

  );
}
