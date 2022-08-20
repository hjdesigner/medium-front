import React from 'react';
import { articles } from 'mocks/articles';
import { EditLocation } from '@styled-icons/boxicons-solid';
import { Delete } from '@styled-icons/material';
import * as S from './style';

const MyAccount = () => {
  return (
    <S.MyAccountElement>
      <S.MyAccountContainer>
        <S.MyAccountUser>
          <S.MyAccountUserTitle>Hi Fulano</S.MyAccountUserTitle>
          <S.MyAccountUserText>
            Welcome to the administration area, here you can view, create, edit or delete an article
          </S.MyAccountUserText>
        </S.MyAccountUser>
        <S.MyAccountArticles>
          <S.MyAccountArticlesTitle>
            All Articles
            <S.MyAccountNewArticleLink to="/new-article">New article</S.MyAccountNewArticleLink>
          </S.MyAccountArticlesTitle>
          <S.MyAccountArticlesTable>
            <S.MyAccountArticlesThead>
              <S.MyAccountArticlesHeaderTr>
                <S.MyAccountArticlesHeaderTh>Title</S.MyAccountArticlesHeaderTh>
                <S.MyAccountArticlesHeaderTh>Category</S.MyAccountArticlesHeaderTh>
                <S.MyAccountArticlesHeaderTh>Status</S.MyAccountArticlesHeaderTh>
                <S.MyAccountArticlesHeaderTh>Actions</S.MyAccountArticlesHeaderTh>
              </S.MyAccountArticlesHeaderTr>
            </S.MyAccountArticlesThead>

            <S.MyAccountArticlesTbody>
              {articles.map((item) => (
                <S.MyAccountArticlesContentTr key={item.id}>
                  <S.MyAccountArticlesContentTh>{item.title}</S.MyAccountArticlesContentTh>
                  <S.MyAccountArticlesContentTh>{item.category}</S.MyAccountArticlesContentTh>
                  <S.MyAccountArticlesContentTh>{item.status}</S.MyAccountArticlesContentTh>
                  <S.MyAccountArticlesContentTh>
                    <S.MyAccountArticlesActions>
                      <S.MyAccountArticlesActionsButton>
                        <EditLocation />
                      </S.MyAccountArticlesActionsButton>
                      <S.MyAccountArticlesActionsButton>
                        <Delete />
                      </S.MyAccountArticlesActionsButton>
                    </S.MyAccountArticlesActions>
                  </S.MyAccountArticlesContentTh>
                </S.MyAccountArticlesContentTr>
              ))}
            </S.MyAccountArticlesTbody>
          </S.MyAccountArticlesTable>
        </S.MyAccountArticles>
      </S.MyAccountContainer>
    </S.MyAccountElement>
  );
};

export default MyAccount;
