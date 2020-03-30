import React from 'react';
import StyledAddButton from './style/StyledAddButton';
import StyledTitle from './style/StyledTitle';
import StyledPlus from './style/StyledPlus';

export default function AddButton(props) {
  return (
    <StyledAddButton>
      <StyledPlus className="logo-add" />
      <StyledTitle name={props.name}>{props.name}</StyledTitle>
    </StyledAddButton>
  );
}
