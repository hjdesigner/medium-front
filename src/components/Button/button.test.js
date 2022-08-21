import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import 'jest-styled-components'
import Button from './index';

describe('Testing Button', () => {
	it('should render the primary button', () => {
    renderWithTheme(<Button format="primary" handleClick={() => {}}>Developer</Button>);

    expect(screen.getByRole('button', {
      name: /developer/i
    })).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /developer/i
    })).toHaveStyle({
      "cursor": "pointer",
      "border-radius": "18px",
      "background-color": "#FFF",
      "padding": "8px 16px",
      "color": "#000",
      "border": "1px solid #000",
      "font-size": ".8rem",
      "transition": "all .25s ease-in-out",
    });
  });
  it('should render the secondary button', () => {
    renderWithTheme(<Button format="secondary" handleClick={() => {}}>Frontend</Button>);

    expect(screen.getByRole('button', {
      name: /frontend/i
    })).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /frontend/i
    })).toHaveStyle({
      "cursor": "pointer",
      "color": "#FFF",
      "background-color": "#3f53d8",
      "border-radius": "5px",
      "border": 0,
      "padding": "16px 24px",
      "font-size": "1rem",
      "transition": "background-color .25s ease-in-out",
    });
  });
});
