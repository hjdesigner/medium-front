import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import { useUser, useCategories, useArticles } from 'hooks';
import { Button } from 'components';
import * as S from './style';

const EditArticle = () => {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth0();
  const { validateIsLogin } = useUser();
  const { requestCategories, categories } = useCategories();
  const {
    content,
    status,
    title,
    resume,
    image,
    category,
    changeContent,
    changeStatus,
    changeTitle,
    changeResume,
    changeImage,
    changeCategory,
    handleEditSubmit,
    getArticleEdit,
  } = useArticles();
  
  useEffect(() => {
    validateIsLogin(isAuthenticated, user);
    requestCategories();
    getArticleEdit(id);
  }, []);

  const handleResume = (text) => {
    if (text.length <= 71) {
      changeResume(text);
    }
  }
  return (
    <S.EditArticleElement>
      <S.EditArticleContainer>
        <S.EditArticleTitle>Edit Article</S.EditArticleTitle>

        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="status">Status</S.EditArticleLabel>
          <S.EditArticleSelect id="status" value={status} onChange={(e) => changeStatus(e.target.value)}>
            <S.EditArticleSelectOption value='Draft'>Draft</S.EditArticleSelectOption>
            <S.EditArticleSelectOption value='Publish'>Publish</S.EditArticleSelectOption>
          </S.EditArticleSelect>
        </S.EditArticleFields>
        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="title">Title</S.EditArticleLabel>
          <S.EditArticleInput type="text" id="title" value={title} onChange={(e) => changeTitle(e.target.value)} />
        </S.EditArticleFields>
        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="smallDescription">Small description</S.EditArticleLabel>
          <S.EditArticleInput type="text" id="smallDescription" value={resume} onChange={(e) => handleResume(e.target.value)}/>
        </S.EditArticleFields>
        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="urlImage">URL Image</S.EditArticleLabel>
          <S.EditArticleInput type="text" id="urlImage" value={image} onChange={(e) => changeImage(e.target.value)} />
        </S.EditArticleFields>
        {image !== '' && (
          <S.EditArticleFields>
            <S.EditArticlePreview>
              <S.EditArticlePreviewImage src={image} alt={title} />
            </S.EditArticlePreview>
          </S.EditArticleFields>
        )}        
        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="category">Category</S.EditArticleLabel>
          <S.EditArticleSelect id="category" value={category} onChange={(e) => changeCategory(e.target.value)}>
            <S.EditArticleSelectOption>Select Category</S.EditArticleSelectOption>
            {categories.map((item) => (
              <S.EditArticleSelectOption key={item.id} value={item.name}>{item.name}</S.EditArticleSelectOption>
            ))}
          </S.EditArticleSelect>
        </S.EditArticleFields>
        <S.EditArticleFields>
          <S.EditArticleLabel htmlFor="content">Content</S.EditArticleLabel>
          <ReactQuill theme="snow" value={content} onChange={changeContent}/>
        </S.EditArticleFields>
        <S.EditArticleButton>
          <Button
            format="secondary"
            handleClick={() => handleEditSubmit(id, user.sub)}
            disabled={
              status === '' ||
              title === '' ||
              resume === '' ||
              category === '' ||
              content === ''
            }
          >Edit</Button>
          <S.EditArticleLink to="/my-account">Cancel</S.EditArticleLink>
        </S.EditArticleButton>
      </S.EditArticleContainer>
    </S.EditArticleElement>
  );
};

export default EditArticle;
