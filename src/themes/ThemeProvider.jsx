import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import React from 'react';

createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');
font-family: 'Nunito';
`;

export default function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}
