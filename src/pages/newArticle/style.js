import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NewArticleElement = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.extraLarge} 0;
    width: 100%;
  `}
`;
export const NewArticleContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 ${theme.spaces.small};
  `}
`;
export const NewArticleTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz3};
    color: ${theme.colors.black};
    font-weight: 600;
    margin-bottom: ${theme.spaces.extraLarge};
    width: 100%;
  `}
`;
export const NewArticleFields = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.medium};
    width: 100%;
  `}
`;
export const NewArticleLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 400;
    margin-bottom: ${theme.spaces.small};
    display: inline-block;
    width: 100%;
  `}
`;
export const NewArticleInput = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 400;
    padding: ${theme.spaces.small};
    width: 100%;
    border: 1px solid ${theme.colors.gray};
    border-radius: 5px;
  `}
`;
export const NewArticleSelect = styled.select`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.black};
    font-weight: 400;
    padding: ${theme.spaces.small};
    width: auto;
    min-width: 300px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 5px;
  `}
`;
export const NewArticleSelectOption = styled.option``;
export const NewArticleButton = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spaces.xxLarge} 0;
    display: flex;
    align-items: center;
  `}
`;
export const NewArticleLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color .25s ease-in-out;
    padding: ${theme.spaces.medium};
    margin-left: ${theme.spaces.small};
    font-size: ${theme.fontSizes.fz0};
  `}
`;
export const NewArticlePreview = styled.div`
  position: relative;
  display: block;
  width: 300px;
  height: 300px;
`;
export const NewArticlePreviewImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;
