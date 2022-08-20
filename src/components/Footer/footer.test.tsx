import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import Footer from './index';

describe('Testing Footer', () => {
	it('Footer', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText(/© 2022 Medium, Inc. All Rights Reserved/i)).toBeInTheDocument();
  });
});
