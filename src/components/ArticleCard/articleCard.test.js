import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helperTest';
import { articles } from 'mocks/articles';
import 'jest-styled-components'
import ArticleCard from './index';

describe('Testing Article Card', () => {
	it('should render the large size', () => {
    renderWithTheme(<ArticleCard item={articles[0]} size="large" handleClickBookmarks={() => {}} />);
    
    expect(screen.getByRole('heading', {
      name: /showcase your thought provoking topics and ideas/i
    })).toBeInTheDocument();
    expect(screen.getByText(
      /big company announcement or simple sub\-header taking two or more lines\./i
    )).toBeInTheDocument();
    expect(screen.getByRole('img', {
      name: /showcase your thought provoking topics and ideas/i
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /read more/i
    })).toBeInTheDocument();
    expect(screen.getByTestId('content')).toHaveStyle({
      "margin-bottom": "24px",
      "padding-right": 0,
      order: 1,
    });
    expect(screen.getByRole('heading', {
      name: /showcase your thought provoking topics and ideas/i
    })).toHaveStyle({
      "font-size": "2rem",
      "margin": "24px 0",
    });
    expect(screen.getByText(
      /big company announcement or simple sub\-header taking two or more lines\./i
    )).toHaveStyle({
      'font-size': '1rem',
    });
    expect(screen.getByTestId('image')).toHaveStyle({
      height: '400px',
      order: 2,
    });
  });
  it('should render the small size', () => {
    renderWithTheme(<ArticleCard item={articles[0]} size="small" handleClickBookmarks={() => {}} />);
    
    expect(screen.getByRole('heading', {
      name: /showcase your thought provoking topics and ideas/i
    })).toBeInTheDocument();
    expect(screen.getByText(
      /big company announcement or simple sub\-header taking two or more lines\./i
    )).toBeInTheDocument();
    expect(screen.getByRole('img', {
      name: /showcase your thought provoking topics and ideas/i
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /read more/i
    })).toBeInTheDocument();
    expect(screen.getByTestId('content')).toHaveStyle({
      "padding-left": 0,
      order: 2,
    });
    expect(screen.getByRole('heading', {
      name: /showcase your thought provoking topics and ideas/i
    })).toHaveStyle({
      "font-size": "1.25rem",
      "margin": "16px 0",
    });
    expect(screen.getByText(
      /big company announcement or simple sub\-header taking two or more lines\./i
    )).toHaveStyle({
      'font-size': '.8rem',
    });
    expect(screen.getByTestId('image')).toHaveStyle({
      height: '250px',
      order: 1,
    });
  });
  it('should render the default empty image', () => {
    renderWithTheme(<ArticleCard item={articles[1]} size="small" handleClickBookmarks={() => {}} />);
    const image = screen.getByRole('img', {
      name: /showcase your thought provoking topics and ideas/i
    })
    expect(image).toHaveAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NClpQrO6iEc4y3gKTRIFEB3LDKN2J_mKQ&usqp=CAU')
  });
});
