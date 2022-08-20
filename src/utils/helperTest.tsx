import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';

import theme from './theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult => (
  render(<BrowserRouter><ThemeProvider theme={theme}>{children}</ThemeProvider></BrowserRouter>)
);
