import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ArticleCard, EmptyContent, Loader } from 'components';
import { useUser, useBookmarks } from 'hooks';
import * as S from './style';

const MyBookmarks = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { saveBookmark, bookmarks, requestBookMark, loading } = useBookmarks();
  
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
            {loading && <Loader fullPage={false} />}
            {!loading && bookmarks.map((item) => (
              <S.MyBookmarksArticlesli key={item.id}><ArticleCard item={item} size="small" handleClickBookmarks={() => saveBookmark(item, 'remove', user.sub)} /></S.MyBookmarksArticlesli>)
            )}
            {!loading && !bookmarks.length && <EmptyContent>Empty content, select an article to read later</EmptyContent>}
          </S.MyBookmarksArticlesUl>
        </S.MyBookmarksArticlesContainer>
      </S.MyBookmarksContainer>
    </S.MyBookmarksElement>
  );
};

export default MyBookmarks;
