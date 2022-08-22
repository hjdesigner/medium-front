import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const modifiers = {
  smallImage: () => css`
    height: 250px;
    order: 1;
  `,
  largeImage: () => css`
    height: 400px;
    order: 2;
  `,
  positionSmallContent: (theme) => css`
    padding-left: 0;
    order: 2;

    @media screen and (min-width: 1024px) {
      padding-left: ${theme.spaces.large};
    }
  `,
  positionLargeContent: (theme) => css`
    margin-bottom: ${theme.spaces.large};
    padding-right: 0;
    order: 1;

    @media screen and (min-width: 1024px) {
      padding-right: ${theme.spaces.large};
      margin-bottom: 0;
    }
  `,
  smallTitle: (theme) => css`
    font-size: ${theme.fontSizes.fz2};
    margin: ${theme.spaces.medium} 0;
  `,
  largeTitle: (theme) => css`
    font-size: ${theme.fontSizes.fz5};
    margin: ${theme.spaces.large} 0;
  `,
  smallText: (theme) => css`
    font-size: ${theme.fontSizes.fz0};
  `,
  largeText: (theme) => css`
    font-size: ${theme.fontSizes.fz1};
  `,
  smallLink: (theme) => css`
    padding: ${theme.spaces.small};
    font-size: ${theme.fontSizes.fz0};
  `,
  largeLink: (theme) => css`
    padding: ${theme.spaces.medium};
    font-size: ${theme.fontSizes.fz1};
  `,
};

export const ArticleElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const ArticleTitle = styled.h2`
  ${({ theme, size }) => css`
    ${size === 'large' ? modifiers.largeTitle(theme) : modifiers.smallTitle(theme)};
    color: ${theme.colors.black};    
    font-weight: 600;
  `}
`;
export const ArticleResume = styled.p`
  ${({ theme, size }) => css`
    ${size === 'large' ? modifiers.largeText(theme) : modifiers.smallText(theme)};
    color: ${theme.colors.black};
    font-weight: 400;
  `}
`;
export const ArticleButton = styled(Link)`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-radius: 5px;
    font-weight: 400;
    text-decoration: none;
    transition: background-color .25s ease-in-out;
    ${size === 'large' ? modifiers.largeLink(theme) : modifiers.smallLink(theme)};

    &:hover {
      background-color: ${theme.colors.redLight}
    }
  `}
`;
export const ArticleButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spaces.large};
    display: flex;
  `}
`;
export const ArticleImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;
export const ArticleContext = styled.div`
  ${({ theme, size }) => css`
    min-width: 50%;
    ${size === 'large' ? modifiers.positionLargeContent(theme) : modifiers.positionSmallContent(theme)};
  `}
`;
export const ArticleImagemContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;

  ${({ size }) => css`
    ${size === 'large' ? modifiers.largeImage() : modifiers.smallImage()};
  `}
`;
