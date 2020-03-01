import React from 'react';
import StyledButton from './StyledButton';


export default function ButtonAdd(props) {
  return (

    <StyledButton>
<div className='logo-add'/>
<span className='span-add'>{props.name}</span>
    </StyledButton>

  );
}
