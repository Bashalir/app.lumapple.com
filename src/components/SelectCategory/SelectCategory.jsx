import React from 'react';
import StyledSelectCategory from './assets/StyledSelectCategory';
import CategoryCard from '../CategoryCard/index.jsx';
import Card from '../Card.jsx';

export default function SelectCategory() {
  return (
    <StyledSelectCategory>
      <h2 className="title-sell-now">Vendez Maintenant</h2>
      <div className="card-select-category">
        <h3 className="title-select-category">
          Choisissez la famille du produit
        </h3>
        <div className="select-category">
          <CategoryCard name="Mac" />
          <CategoryCard name="Mac" />
          <CategoryCard name="MacBook" />
          <CategoryCard name="iPad" />
          <CategoryCard name="iPhone" />
          <CategoryCard name="Watch" />
        </div>
      </div>
    </StyledSelectCategory>
  );
}
