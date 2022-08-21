import styled, { css } from 'styled-components';

export const ArticleElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.xLarge} 0;
    width: 100%;
  `}
`;
export const ArticleContainer = styled.article`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;
export const ArticleTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz4};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
  `}
`;
export const ArticleImage = styled.figure`
  ${({ theme }) => css`
    margin: ${theme.spaces.medium} 0;
    width: 100%;
    display: inline-block;
  `}
`;
export const ArticleImageElement = styled.img`
  max-width: 100%;
  border-radius: 18px;
`;
export const ArticleText = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.fontSizes.fz1};
      color: ${theme.colors.black};
      font-weight: 400;
      margin-bottom: ${theme.spaces.medium};
      width: 100%;
    }
    a {
      color: ${theme.colors.redLight};
    }
    img {
      max-width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: ${theme.fontSizes.fz2};
      color: ${theme.colors.black};
      font-weight: 600;
      margin-bottom: ${theme.spaces.medium};
    }
  `}
`;
