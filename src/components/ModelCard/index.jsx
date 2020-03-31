import React from 'react';

import StyledModelCard from './style/StyledModelCard';
import StyledFigure from './style/StyledFigure';
import StyledName from './style/StyledName';

import iPhoneXR from './img/iPhone XR.png';

const Img = (props) => {
  return <img src={iPhoneXR} name={props.name} alt={props.name} />;
};

export default function ModelCard(props) {
  return (
    <StyledModelCard>
      <StyledFigure>
        <Img name={props.name} />
      </StyledFigure>
      <StyledName name={props.name}>{props.name}</StyledName>
    </StyledModelCard>
  );
}
