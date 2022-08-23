import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ArticleCard } from 'components';
import { useUser, useBookmarks } from 'hooks';
import * as S from './style';

const MyBookmarks = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { saveBookmark, bookmarks, requestBookMark } = useBookmarks();
  
  useEffect(() => {
    validateIsLogin(isAuthenticated, user);
    requestBookMark(user.sub);
  }, []);

  return (
    <S.MyBookmarksElement>
      <S.MyBookmarksContainer>
        <S.MyBookmarkesTitle>My Bookmarks</S.MyBookmarkesTitle>
        <S.MyBookmarksArticlesContainer>
          <S.MyBookmarksArticlesUl>
            {bookmarks.map((item) => (
              <S.MyBookmarksArticlesli key={item.id}><ArticleCard item={item} size="small" handleClickBookmarks={() => saveBookmark(item, 'remove', user.sub)} /></S.MyBookmarksArticlesli>)
            )}
          </S.MyBookmarksArticlesUl>
        </S.MyBookmarksArticlesContainer>
      </S.MyBookmarksContainer>
    </S.MyBookmarksElement>
  );
};

export default MyBookmarks;
