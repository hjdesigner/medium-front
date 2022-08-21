import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { UserProvider } from 'context';

import theme from './theme';

export const renderWithTheme = (children) => (
  render(<BrowserRouter><ThemeProvider theme={theme}><UserProvider>{children}</UserProvider></ThemeProvider></BrowserRouter>)
);
