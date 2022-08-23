import styled, { css } from 'styled-components';

export const MyBookmarksElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.xLarge} 0;
    width: 100%;
  `}
`;
export const MyBookmarksContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;
export const MyBookmarkesTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz3};
    color: ${theme.colors.black};
    font-weight: 600;
    margin: ${theme.spaces.xxLarge} 0;
    width: 100%;
  `}
`;
export const MyBookmarksArticlesContainer = styled.section`

  ${({ theme }) => css`
    margin: ${theme.spaces.extraLarge} 0;
    display: inline-block;
    width: 100%;
  `}

`;
export const MyBookmarksArticlesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const MyBookmarksArticlesli = styled.li`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spaces.extraLarge};    

    @media screen and (min-width: 768px) {
      width: 47%;
      margin-left: 0;

      &:nth-child(2n+0) {
        margin-left: 6%;
      } 
    }
  `}
`;
