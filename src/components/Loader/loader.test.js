import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import Loader from './index';

describe('Testing Loader', () => {
	it('Loader', () => {
    renderWithTheme(<Loader />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
