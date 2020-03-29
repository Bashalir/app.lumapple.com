import React from 'react';
//import { action } from '@storybook/addon-actions';
import Mac from '../components/CategoryCard/assets/mac.svg';
import {
  StyledCategoryCardMac,
  CategoryCard,
} from '../components/CategoryCard/CategoryCard.jsx';

export default {
  title: 'StyledCategoryCardMac',
  component: StyledCategoryCardMac,
};

// export const CategoryCardMac = () => <CategoryCard name="Mac" img="../components/CategoryCard/assets/mac.svg" />;

export const CategoryCardMac = () => (
  <StyledCategoryCardMac name="Mac" img={Mac} />
);
