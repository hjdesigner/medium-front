import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import 'jest-styled-components';
import Loader from './index';

describe('Testing Loader', () => {
	it('should render the fullpage', () => {
    renderWithTheme(<Loader fullPage={true} />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    expect(screen.getByTestId('loaderElement')).toHaveStyle({
      "display": "flex",
      "background-color": "#FFF",
      "justify-content": "center",
      "align-items": "center",
      "width": "100%",
      "height": "100%",
      "position": "fixed",
      "z-index": "1000",
      "top": "0",
      "left": "0",
    });
    expect(screen.getByText(/loading.../i)).toHaveStyle({
      "color": "#f46262",
      "text-align": "center",
      "font-size": "2rem",
    });
  });
  it('should render the not fullpage', () => {
    renderWithTheme(<Loader fullPage={false} />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    expect(screen.getByTestId('loaderElement')).toHaveStyle({
      "display": "flex",
      "background-color": "#FFF",
      "justify-content": "center",
      "align-items": "center",
      "width": "100%",
    });
    expect(screen.getByText(/loading.../i)).toHaveStyle({
      "color": "#f46262",
      "text-align": "center",
      "font-size": "1rem",
    });
  });
});
