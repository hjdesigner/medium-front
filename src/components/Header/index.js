import React from 'react';
import * as S from './style';
import { useUser } from 'hooks';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout } = useAuth0();
  const { userInfo } = useUser();
  return (
    <S.HeaderElement>
      <S.HeaderContainer>
        <S.HeaderLogo to="/">Medium</S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderNavUl>
            <S.HeaderNavLi>
              <S.HeaderNavLink to="/my-bookmarkes">My Bookmarks</S.HeaderNavLink>
            </S.HeaderNavLi>
            <S.HeaderNavLi>
              <S.HeaderNavLink to="/my-account">My Account</S.HeaderNavLink>
            </S.HeaderNavLi>
            {userInfo?.sub && (
              <S.HeaderNavLi>
                {userInfo?.given_name && userInfo?.family_name && <S.HeaderName>Hi {userInfo?.given_name} {userInfo?.family_name}</S.HeaderName>}
                <S.HeaderLogout onClick={() => logout({ returnTo: window.location.origin })}>logout</S.HeaderLogout>
              </S.HeaderNavLi>
            )}            
          </S.HeaderNavUl>
        </S.HeaderNav>
      </S.HeaderContainer>
    </S.HeaderElement>
  );
};

export default Header;
