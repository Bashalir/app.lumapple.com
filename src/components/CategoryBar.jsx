import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard/index.jsx';

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
