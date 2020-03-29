import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard/CategoryCard.jsx';
import Mac from './CategoryCard/assets/mac.svg';
import Ipad from './CategoryCard/assets/ipad.svg';
import Iphone from './CategoryCard/assets/iphone.svg';
import MacBook from './CategoryCard/assets/macbook.svg';
import Watch from './CategoryCard/assets/watch.svg';

const StyledCategoryBar = styled.div`
  .category-bar {
    display: flex;
    margin: 0 auto;
    max-width: 1066px;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    height: 100%;
  }
`;

export default function CategoryBar() {
  return (
    <StyledCategoryBar>
      <nav className="category-bar">
        <CategoryCard name="Mac" />
        {/* <CategoryCard name="Mac Book" img={MacBook} />
        <CategoryCard name="iPad" img={Ipad} />
        <CategoryCard name="iPhone" img={Iphone} />
        <CategoryCard name="Watch" img={Watch} /> */}
      </nav>
    </StyledCategoryBar>
  );
}
