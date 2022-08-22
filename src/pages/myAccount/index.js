import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser, useArticles } from 'hooks';
import { EditLocation } from '@styled-icons/boxicons-solid';
import { Delete } from '@styled-icons/material';
import { Button } from 'components';
import * as S from './style';

const MyAccount = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const {
    loadingIsAdmin,
    isAdmin,
    userInfo,
    salveIsAdmin,    
    validateIsAdmin,
    validateIsLogin,
  } = useUser();
  const { requestArticles, articles, requestDeletArticle } = useArticles();

  useEffect(() => {
    validateIsLogin(isAuthenticated, user);
    validateIsAdmin(user.sub);
    requestArticles(user.sub);
  }, []);

  const handleIsAdmin = async (value) => {
    await salveIsAdmin({
      name: userInfo?.name,
      isAdmin: value,
      sub: userInfo.sub,
    });
  }
  const handleOpenEdit = (id) => {
    return navigate(`/edit-article/${id}`);
  }

  return (
    <S.MyAccountElement>
      <S.MyAccountContainer>
        {!loadingIsAdmin && (
          <>
            <S.MyAccountUser>
              <S.MyAccountUserTitle>Hi {userInfo?.given_name} {userInfo?.family_name}</S.MyAccountUserTitle>
              <S.MyAccountUserText>
                Welcome to the administrator area, here you can view, create, edit or delete an article
              </S.MyAccountUserText>
              {!isAdmin.status && (
                <S.MyAccountUserText>
                  Before starting to create your articles, please define your access level.
                </S.MyAccountUserText>
              )}
            </S.MyAccountUser>
            {!isAdmin.status && (
              <S.MyAccountLevel>
                <Button format='secondary' handleClick={() => handleIsAdmin(true)}>Administrator</Button>
                <Button format='secondary' handleClick={() => handleIsAdmin(false)}>Autor</Button>
              </S.MyAccountLevel>
            )}
            {isAdmin.status && (
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
                              <EditLocation onClick={() => handleOpenEdit(item.id)} />
                            </S.MyAccountArticlesActionsButton>
                            <S.MyAccountArticlesActionsButton>
                              <Delete onClick={() => requestDeletArticle(item.id, isAdmin?.isAdmin ? '' : user.sub)} />
                            </S.MyAccountArticlesActionsButton>
                          </S.MyAccountArticlesActions>
                        </S.MyAccountArticlesContentTh>
                      </S.MyAccountArticlesContentTr>
                    ))}
                  </S.MyAccountArticlesTbody>
                </S.MyAccountArticlesTable>
              </S.MyAccountArticles>
            )}
          </>
        )}        
      </S.MyAccountContainer>
    </S.MyAccountElement>
  );
};

export default MyAccount;
