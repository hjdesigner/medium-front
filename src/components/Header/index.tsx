import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderElement>
      <S.HeaderContainer>
        <S.HeaderLogo>Medium</S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderNavUl>
            <S.HeaderNavLi>
              <S.HeaderNavLink to="/">My Bookmarks</S.HeaderNavLink>
            </S.HeaderNavLi>
            <S.HeaderNavLi>
              <S.HeaderNavLink to="/">My Account</S.HeaderNavLink>
            </S.HeaderNavLi>
          </S.HeaderNavUl>
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.HeaderElement>
  );
};

export default Header;
