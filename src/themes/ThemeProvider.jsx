import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import React from 'react';
import './reset.css';

createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap');
font-family: ${({ theme }) => theme.fonts.primary};

`;

export default function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}
