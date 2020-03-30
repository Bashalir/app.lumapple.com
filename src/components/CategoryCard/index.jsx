import React from 'react';

import StyledCategoryCard from './style/StyledCategoryCard';
import StyledFigure from './style/StyledFigure';
import StyledName from './style/StyledName';

import Mac from './img/mac.svg';
import Ipad from './img/ipad.svg';
import Iphone from './img/iphone.svg';
import MacBook from './img/macbook.svg';
import Watch from './img/watch.svg';

const Img = (props) => {
  switch (props.name) {
    case 'Mac':
      return <img src={Mac} name={props.name} alt={props.name} />;
    case 'iPad':
      return <img src={Ipad} name={props.name} alt={props.name} />;
    case 'iPhone':
      return <img src={Iphone} name={props.name} alt={props.name} />;
    case 'MacBook':
      return <img src={MacBook} name={props.name} alt={props.name} />;
    case 'Watch':
      return <img src={Watch} name={props.name} alt={props.name} />;
    default:
      return <div />;
  }
};

export default function CategoryCard(props) {
  return (
    <StyledCategoryCard>
      <StyledFigure>
        <Img name={props.name} />
      </StyledFigure>
      <StyledName name={props.name}>{props.name}</StyledName>
    </StyledCategoryCard>
  );
}
