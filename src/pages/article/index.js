import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser, useArticles } from 'hooks';
import { sanitize } from 'dompurify';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { Loader } from 'components';

const Article = () => {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { article, clearArticle, requestArticleByLink,loadingArticle } = useArticles();

  useEffect(() => {
    clearArticle();
    validateIsLogin(isAuthenticated, user);
    requestArticleByLink(id);
  }, []);

  return (
    <S.ArticleElement>
      <S.ArticleContainer>
        {loadingArticle && <Loader />}
        {!loadingArticle && (
          <>
            <S.ArticleTitle>{article?.title}</S.ArticleTitle>
            <S.ArticleImage>
              <S.ArticleImageElement
                src={article?.image === '' ? 'https://img.freepik.com/psd-premium/minimal-empty-square-black-frameimagem-mock-up-pendurado-no-fundo-da-parede-branca-com-janela-luz-e-sombra-isolar-ilustracao-vetorial_144352-157.jpg?w=2000' : article?.image}
                alt={article?.title}
              />
            </S.ArticleImage>
            <S.ArticleText>
              {/* eslint-disable-next-line  */}
              <div dangerouslySetInnerHTML={{ __html: sanitize(`${article?.content}`) }} />
            </S.ArticleText>
          </>
        )}        
      </S.ArticleContainer>
    </S.ArticleElement>
  );
};

export default Article;
