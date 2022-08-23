import styled, { css } from 'styled-components';
import { Book } from '@styled-icons/bootstrap';

export const EmptyContentElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spaces.xxLarge};
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

export const EmptyContentText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz2};
    color: ${theme.colors.black};
    font-weight: 400;
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
    text-align: center;
  `}
`;
export const EmptyIcon = styled(Book)`
  ${({ theme }) => css`
    margin: ${theme.spaces.xxLarge};
    width: 60px;

    fill: ${theme.colors.gray};
  `}
`;
