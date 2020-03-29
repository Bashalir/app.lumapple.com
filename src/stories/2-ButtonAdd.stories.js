import React from 'react';

//import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ButtonAdd from '../components/ButtonAdd/ButtonAdd.jsx';

export default {
  title: 'ButtonAdd',
  component: ButtonAdd,
  decorators: [withKnobs],
};

export const Test = () => <ButtonAdd name={text('Title', 'Add Button')} />;
