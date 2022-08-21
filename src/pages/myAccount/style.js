import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MyAccountElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.extraLarge} 0;
    width: 100%;
  `}
`;
export const MyAccountContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;

export const MyAccountUser = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spaces.extraLarge} 0;
    display: inline-block;
    width: 100%;
  `}
`;

export const MyAccountUserTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz3};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
  `}
`;

export const MyAccountUserText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 400;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
  `}
`;
export const MyAccountNewArticleLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-radius: 5px;
    font-weight: 400;
    text-decoration: none;
    transition: background-color .25s ease-in-out;
    padding: ${theme.spaces.small} ${theme.spaces.medium};
    font-size: ${theme.fontSizes.fz0};

    &:hover {
      background-color: ${theme.colors.redLight}
    }
  `}
`;
export const MyAccountArticles = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spaces.extraLarge} 0;
    display: inline-block;
    width: 100%;
  `}
`;
export const MyAccountArticlesTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz2};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
export const MyAccountArticlesTable = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;
  border-collapse: collapse;
  border-width: 0;
`;
export const MyAccountArticlesThead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.redLight};
  `}
`;
export const MyAccountArticlesHeaderTr = styled.tr``;
export const MyAccountArticlesContentTr = styled.tr`
  ${({ theme }) => css`
    &:nth-child(2n+0) {
      background-color: ${theme.colors.gray};
    }
  `}
`;
export const MyAccountArticlesHeaderTh = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: ${theme.spaces.small};
    font-size: ${theme.fontSizes.fz0};
    font-weight: 600;
    border-spacing: 0;
    border-collapse: collapse;
    border-width: 0;
  `}
`;
export const MyAccountArticlesContentTh = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: ${theme.spaces.small};
    font-size: ${theme.fontSizes.fz0};
    font-weight: 400;
    border-spacing: 0;
    border-collapse: collapse;
    border-width: 0;
  `}
`;
export const MyAccountArticlesTbody = styled.tbody``;
export const MyAccountArticlesActions = styled.div`
  display: flex;
  align-items: center;
`;
export const MyAccountArticlesActionsButton = styled.button`
  ${({ theme }) => css`
    margin-right: ${theme.spaces.small};
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 25px;
    transition: all .25s ease-in-out;
    
    svg {
      fill: ${theme.colors.black}
      transition: all .25s ease-in-out;
    }

    &:hover {
      svg {
        fill: ${theme.colors.redLight}
      }      
    }
  `}
`;
export const MyAccountLevel = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;
