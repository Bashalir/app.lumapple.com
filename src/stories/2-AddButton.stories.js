import React from 'react';

//import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import AddButton from '../components/AddButton/index.jsx';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'AddButton',
  component: AddButton,
  decorators: [withKnobs, withInfo],
};

export const Button = () => <AddButton name={text('Title', 'Add Button')} />;
