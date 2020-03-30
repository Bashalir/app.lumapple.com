import React from 'react';

//import { action } from '@storybook/addon-actions';
import CategoryCard from '../components/CategoryCard/index.jsx';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CategoryCard',
  component: CategoryCard,
  decorators: [withKnobs],
};

const label = 'Category';
const options = ['Mac', 'MacBook', 'iPad', 'iPhone', 'Watch'];
const defaultValue = 'Mac';

export const CategoryCardMac = () => (
  <CategoryCard name={select(label, options, defaultValue)} />
);
