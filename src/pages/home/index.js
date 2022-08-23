import React, { useEffect } from 'react';
import { Button, ArticleCard, EmptyContent, Loader } from 'components';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser, useArticles, useCategories, useBookmarks } from 'hooks';
import * as S from './style';


const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { categories, requestCategories } = useCategories();
  const { saveBookmark } = useBookmarks();
  const {
    articlesHome,
    requestPublishArticles,
    loadMorePublishArticles,
    showLoadMore,
    featuredArticle,
    filterCategoryArticle,
    clearPageValue,
    loading,
    loadingMore,
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
          {featuredArticle?.title ? <ArticleCard item={featuredArticle} size="large" handleClickBookmarks={() => saveBookmark(featuredArticle, 'save', user.sub)} /> : ''}
        </S.HomeArticlesFeature>
        <S.HomeCategories>
          <S.HomeCategoriesTitle>Categories</S.HomeCategoriesTitle>
          <S.HomeArticlesUl>
            {categories.map((item) => (
              <S.HomeCategoriesLi key={item.id}>
                <Button format="primary" handleClick={() => filterCategoryArticle(item.name)}>{item.name}</Button>
              </S.HomeCategoriesLi>)
            )}
          </S.HomeArticlesUl>
        </S.HomeCategories>
        <S.HomeArticlesContainer>
          <S.HomeArticlesUl>
            {!loading && articlesHome.length !== 0 && articlesHome.map((item) => item.status === 'Publish' ? (
              <S.HomeArticlesli key={item.id}>
                <ArticleCard
                  item={item}
                  size="small"
                  handleClickBookmarks={() => saveBookmark(item, 'save', user.sub)}
                />
              </S.HomeArticlesli>) : false
            )}
            {!loading && articlesHome.length === 0 && <EmptyContent>Empty content, publish a new article.</EmptyContent>}
            {loading || loadingMore && <Loader />}
          </S.HomeArticlesUl>
        </S.HomeArticlesContainer>
        {showLoadMore && articlesHome.length != 0 && (
          <S.HomeLoadMore>
            <Button format="secondary" handleClick={() => loadMorePublishArticles()}>Load more</Button>
          </S.HomeLoadMore>
        )}        
      </S.HomeContainer>
    </S.HomeElement>
  );
};

export default Home;
