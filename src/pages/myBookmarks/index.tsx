import React from 'react';
import { ArticleCard } from 'components';
import { articles } from 'mocks/articles';
import * as S from './style';

const MyBookmarks = () => {
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
