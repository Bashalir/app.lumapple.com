import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import React from 'react';

export default function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}
