import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import EmptyContent from './index';

describe('Testing EmptyContent', () => {
	it('EmptyContent', () => {
    renderWithTheme(<EmptyContent>Empty Content</EmptyContent>);
    expect(screen.getByText(/empty content/i)).toBeInTheDocument();    
  });
});
