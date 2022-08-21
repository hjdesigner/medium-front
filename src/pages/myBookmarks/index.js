import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ArticleCard } from 'components';
import { articles } from 'mocks/articles';
import { useUser } from 'hooks';
import * as S from './style';

const MyBookmarks = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  
  useEffect(() => {
    validateIsLogin(isAuthenticated, user);
  }, []);

  return (
    <S.MyBookmarksElement>
      <S.MyBookmarksContainer>
        <S.MyBookmarkesTitle>My Bookmarks</S.MyBookmarkesTitle>
        <S.MyBookmarksArticlesContainer>
          <S.MyBookmarksArticlesUl>
            {articles.map((item) => <S.MyBookmarksArticlesli key={item.id}><ArticleCard item={item} size="small" /></S.MyBookmarksArticlesli>)}
          </S.MyBookmarksArticlesUl>
        </S.MyBookmarksArticlesContainer>
      </S.MyBookmarksContainer>
    </S.MyBookmarksElement>
  );
};

export default MyBookmarks;
