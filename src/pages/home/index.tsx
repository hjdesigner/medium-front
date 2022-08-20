import React from 'react';
import { ArticleCard, Button } from 'components';
import { articles } from 'mocks/articles';
import { categories } from 'mocks/categories';
import * as S from './style';

const Home = () => {
  return (
    <S.HomeElement>
      <S.HomeContainer>
        <S.HomeArticlesFeature>
          <ArticleCard item={articles[0]} size="large" />
        </S.HomeArticlesFeature>
        <S.HomeCategories>
          <S.HomeCategoriesTitle>Categories</S.HomeCategoriesTitle>
          <S.HomeArticlesUl>
            {categories.map((item) => <S.HomeCategoriesLi key={item.id}><Button format="primary" handleClick={() => {}}>{item.text}</Button></S.HomeCategoriesLi>)}
          </S.HomeArticlesUl>
        </S.HomeCategories>
        <S.HomeArticlesContainer>
          <S.HomeArticlesUl>
            {articles.map((item) => <S.HomeArticlesli><ArticleCard item={item} size="small" key={item.id} /></S.HomeArticlesli>)}
          </S.HomeArticlesUl>
        </S.HomeArticlesContainer>
        <S.HomeLoadMore>
          <Button format="secondary" handleClick={() => {}}>Load more</Button>
        </S.HomeLoadMore>
      </S.HomeContainer>
    </S.HomeElement>
  );
};

export default Home;
