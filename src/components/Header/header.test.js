import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import Header from './index';

describe('Testing Header', () => {
	it('Header', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /my bookmarks/i
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /my account/i
    })).toBeInTheDocument();
  });
});
