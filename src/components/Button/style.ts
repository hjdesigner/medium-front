import styled, { css } from 'styled-components';
import { themeProps } from 'utils/theme';

type FormatProps = {
  format: 'primary' | 'secondary'
}

const modifiers = {
  primary: (theme: themeProps) => css`
    border-radius: 18px;
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.small} ${theme.spaces.medium};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    font-size: ${theme.fontSizes.fz0};
    transition: all .25s ease-in-out;

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};
    }
  `,
  secondary: (theme: themeProps) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-radius: 5px;
    border: 0;
    padding: ${theme.spaces.medium} ${theme.spaces.large};
    font-size: ${theme.fontSizes.fz1};
    transition: background-color .25s ease-in-out;
    
    &:hover {
      background-color: ${theme.colors.redLight}
    }
  `,
};

export const ButtonElement = styled.button<FormatProps>`
  ${({ theme, format }) => css`
    cursor: pointer;
    ${format === 'primary' ? modifiers.primary(theme) : modifiers.secondary(theme)};
  `};
`;
