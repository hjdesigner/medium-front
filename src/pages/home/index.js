import React, { useEffect } from 'react';
import { ArticleCard, Button } from 'components';
import { useAuth0 } from '@auth0/auth0-react';
import { articles } from 'mocks/articles';
import { categories } from 'mocks/categories';
import { useUser } from 'hooks';
import * as S from './style';


const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();

  useEffect(() => {
    validateIsLogin(isAuthenticated, user);
  }, []);

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
            {articles.map((item) => <S.HomeArticlesli key={item.id}><ArticleCard item={item} size="small" /></S.HomeArticlesli>)}
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
