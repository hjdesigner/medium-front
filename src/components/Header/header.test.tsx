import React from 'react'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';
import Header from './index';

describe('Testing Header', () => {
	it('Header', () => {
    render(<BrowserRouter><ThemeProvider theme={theme}><Header /></ThemeProvider></BrowserRouter>);
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /my bookmarks/i
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /my account/i
    })).toBeInTheDocument();
  });
});
