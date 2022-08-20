import styled, { css } from 'styled-components';

export const FooterElement = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spaces.large};
    background-color: ${theme.colors.beige};
  `}
`;
export const FooterText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz0};
    color: ${theme.colors.black}
  `}
`;
