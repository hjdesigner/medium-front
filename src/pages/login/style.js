import styled, { css } from 'styled-components';

export const LoginElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.xLarge} 0;
    width: 100%;
  `}
`;
export const LoginContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;
export const LoginTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz3};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.xxLarge};
  `}
`;
export const LoginAction = styled.div`
  width: 320px;
  margin: 0 auto;
  text-align: center;
`;
