import React from 'react';
import { ArticleCard } from 'components';
import { articles } from 'mocks/articles';
import * as S from './style';

const Home = () => {
  return (
    <S.HomeElement>
      <S.HomeContainer>
        <S.HomeArticlesFeature>
          <ArticleCard item={articles[0]} size="large" />
        </S.HomeArticlesFeature>
        <S.HomeArticlesContainer>
          <S.HomeArticlesUl>
            {articles.map((item) => <S.HomeArticlesli><ArticleCard item={item} size="small" key={item.id} /></S.HomeArticlesli>)}
          </S.HomeArticlesUl>
        </S.HomeArticlesContainer>
      </S.HomeContainer>
    </S.HomeElement>
  );
};

export default Home;
