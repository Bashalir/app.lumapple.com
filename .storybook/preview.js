import { addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/themes/theme.js';
import React from 'react';

addDecorator((storyFn) => (
  <ThemeProvider theme={mainTheme}>{storyFn()}</ThemeProvider>
));

addParameters({
  backgrounds: [
    { name: 'Primary', value: '#F7F7F7', default: true },
    { name: 'Secondary', value: '#00C853' },
  ],
});
