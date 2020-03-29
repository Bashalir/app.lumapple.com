import React from 'react';
import StyledSelectCategory from './assets/StyledSelectCategory';
import CategoryCard from '../CategoryCard/CategoryCard.jsx';
import Mac from '../CategoryCard/assets/mac.svg';
import Ipad from '../CategoryCard/assets/ipad.svg';
import Iphone from '../CategoryCard/assets/iphone.svg';
import MacBook from '../CategoryCard/assets/macbook.svg';
import Watch from '../CategoryCard/assets/watch.svg';

export default function SelectCategory() {
  return (
    <StyledSelectCategory>
      <h2 className="title-sell-now">Vendez Maintenant</h2>
      <div className="card-select-category">
        <h3 className="title-select-category">
          Choisissez la famille du produit
        </h3>
        <div className="select-category">
          <CategoryCard name="Mac" img={Mac} />
          <CategoryCard name="iMac" img={Mac} />
          <CategoryCard name="Mac Book" img={MacBook} />
          <CategoryCard name="iPad" img={Ipad} />
          <CategoryCard name="iPhone" img={Iphone} />
          <CategoryCard name="Watch" img={Watch} />
        </div>
      </div>
    </StyledSelectCategory>
  );
}
