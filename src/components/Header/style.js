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
  flex-wrap: wrap;

  ${({ theme }) => css`
    padding: 0 ${theme.spaces.small};
  `}
`;
export const HeaderLogo = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz1};
    color: ${theme.colors.redLight};
    font-weight: 700;
    text-decoration: none;
    
    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.fz3};
    }
  `}
`;
export const HeaderNav = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spaces.small};

    @media screen and (min-width: 768px) {
      width: auto;
      margin-top: 0;
    }
  `}
`;
export const HeaderNavUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const HeaderNavLi = styled.li`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.small};
    display: flex;
    justify-content: flex-end;
    width: 100%;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      width: auto;
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
export const HeaderName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fz0};
    font-weight: 400;
    color: ${theme.colors.blackLight};

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.fz1};
    }
  `}  
`;
export const HeaderLogout = styled.button`
  ${({ theme }) => css`
    border: 0;
    background-color: transparent;
    font-size: ${theme.fontSizes.fz0};
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    margin-left: ${theme.spaces.small};
    color: ${theme.colors.blackLight};

    &:hover {
      color: ${theme.colors.black};
    }
    
    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.fz1};
      margin-left: ${theme.spaces.large};
    }
  `}  
`;
