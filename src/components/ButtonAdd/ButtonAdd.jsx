import React from 'react';
import StyledButtonAdd from './assets/style/StyledButtonAdd';
import StyledTitle from './assets/style/StyledTitle';
import StyledPlus from './assets/style/StyledPlus';

export default function ButtonAdd(props) {
  return (
    <StyledButtonAdd>
      <StyledPlus className="logo-add" />
      <StyledTitle name={props.name}>{props.name}</StyledTitle>
    </StyledButtonAdd>
  );
}
