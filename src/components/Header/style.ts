import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderElement = styled.header`
  width: 100%;
  box-shadow: rgb(233 220 211 / 40%) 0px 2px 10px 0px;
  position: relative;
  
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spaces.xLarge} 0;
  `}
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spaces.small};
  `}
`;
export const HeaderLogo = styled.span`

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.redLight};
    font-weight: 700;

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.fz3};
    }
  `}
`;
export const HeaderNav = styled.nav``;
export const HeaderNavUl = styled.ul`
  display: flex;
`;
export const HeaderNavLi = styled.li`
  ${({ theme }) => css`
    margin-right: ${theme.spaces.small};

    @media screen and (min-width: 768px) {
      margin-right: ${theme.spaces.large};
    }
  `}

  &:last-child {
    margin-right: 0;
  }
`;
export const HeaderNavLink = styled(Link)`
  transition: color .25s ease-in-out;
  text-decoration: none;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz0};
    font-weight: 400;
    color: ${theme.colors.blackLight};

    &:hover {
      color: ${theme.colors.black};
    }

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.fz1};
    }
  `}  
`;