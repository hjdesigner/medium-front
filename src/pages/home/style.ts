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
export const HomeArticlesFeature = styled.section``;
export const HomeArticlesContainer = styled.section`

  ${({ theme }) => css`
    margin-top: ${theme.spaces.extraLarge};
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
