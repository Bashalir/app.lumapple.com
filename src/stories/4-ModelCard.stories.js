import React from 'react';

//import { action } from '@storybook/addon-actions';
import ModelCard from '../components/ModelCard/index.jsx';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'ModelCard',
  component: ModelCard,
  decorators: [withKnobs],
};

export const ModelCardIphoneXR = () => <ModelCard name="iPhone XR" />;
