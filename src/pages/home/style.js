import styled, { css } from 'styled-components';

export const HomeElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.xLarge} 0;
    width: 100%;
  `}
`;
export const HomeContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;
export const HomeArticlesFeature = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.extraLarge};
    display: inline-block;
    width: 100%;
  `}
`;
export const HomeArticlesContainer = styled.section`

  ${({ theme }) => css`
    margin: ${theme.spaces.extraLarge} 0;
    display: inline-block;
    width: 100%;
  `}

`;
export const HomeArticlesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const HomeArticlesli = styled.li`
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
export const HomeCategories = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: ${theme.spaces.extraLarge} 0;
  `}
`;
export const HomeCategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const HomeCategoriesTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;

    @media screen and (min-width: 768px) {
      width: auto;
      margin-bottom: 0;
      margin-right: ${theme.spaces.medium};
    }
  `}
`;
export const HomeCategoriesLi = styled.li`
  ${({ theme }) => css`
    margin-right: ${theme.spaces.small};
  `}
`;
export const HomeLoadMore = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spaces.extraLarge} 0;
    display: flex;
    justify-content: center;
  `}
`;
