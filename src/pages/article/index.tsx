import React from 'react';
import { sanitize } from 'dompurify';
import { articles } from 'mocks/articles';
import * as S from './style';

const Article = () => {
  return (
    <S.ArticleElement>
      <S.ArticleContainer>
        <S.ArticleTitle>{articles[0].title}</S.ArticleTitle>
        <S.ArticleImage>
          <S.ArticleImageElement src={articles[0].image} alt={articles[0].title} />
        </S.ArticleImage>
        <S.ArticleText>
          {/* eslint-disable-next-line  */}
          <div dangerouslySetInnerHTML={{ __html: sanitize(`${articles[0].content}`) }} />
        </S.ArticleText>
      </S.ArticleContainer>
    </S.ArticleElement>
  );
};

export default Article;
