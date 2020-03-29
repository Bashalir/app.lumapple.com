import { addDecorator } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/themes/theme.js';
import React from 'react';

addDecorator((storyFn) => (
  <ThemeProvider theme={mainTheme}>{storyFn()}</ThemeProvider>
));
