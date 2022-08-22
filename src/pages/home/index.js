import React, { useEffect } from 'react';
import { Button, ArticleCard } from 'components';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser, useArticles, useCategories } from 'hooks';
import * as S from './style';


const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { categories, requestCategories } = useCategories();
  const {
    articlesHome,
    requestPublishArticles,
    loadMorePublishArticles,
    showLoadMore,
    featuredArticle,
    filterCategoryArticle,
    clearPageValue,
  } = useArticles();

  useEffect(() => {
    clearPageValue();
    validateIsLogin(isAuthenticated, user);
    requestCategories();
    requestPublishArticles(1);
  }, []);

  return (
    <S.HomeElement>
      <S.HomeContainer>
        <S.HomeArticlesFeature>
          {featuredArticle?.title ? <ArticleCard item={featuredArticle} size="large" /> : ''}
        </S.HomeArticlesFeature>
        <S.HomeCategories>
          <S.HomeCategoriesTitle>Categories</S.HomeCategoriesTitle>
          <S.HomeArticlesUl>
            {categories.map((item) => <S.HomeCategoriesLi key={item.id}><Button format="primary" handleClick={() => filterCategoryArticle(item.name)}>{item.name}</Button></S.HomeCategoriesLi>)}
          </S.HomeArticlesUl>
        </S.HomeCategories>
        <S.HomeArticlesContainer>
          <S.HomeArticlesUl>
            {articlesHome.length ? articlesHome.map((item) => <S.HomeArticlesli key={item.id}><ArticleCard item={item} size="small" /></S.HomeArticlesli>) : ''}
          </S.HomeArticlesUl>
        </S.HomeArticlesContainer>
        {showLoadMore && (
          <S.HomeLoadMore>
            <Button format="secondary" handleClick={() => loadMorePublishArticles()}>Load more</Button>
          </S.HomeLoadMore>
        )}        
      </S.HomeContainer>
    </S.HomeElement>
  );
};

export default Home;
