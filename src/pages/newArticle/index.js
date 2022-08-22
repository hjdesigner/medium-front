import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useUser, useCategories, useArticles } from 'hooks';
import { Button } from 'components';
import * as S from './style';

const NewArticle = () => {
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
    handleSubmit,
    clearStateForm,
  } = useArticles();
  
  useEffect(() => {
    clearStateForm();
    validateIsLogin(isAuthenticated, user);
    requestCategories();
  }, []);

  const handleResume = (text) => {
    if (text.length <= 71) {
      changeResume(text);
    }
  }
  return (
    <S.NewArticleElement>
      <S.NewArticleContainer>
        <S.NewArticleTitle>New Article</S.NewArticleTitle>

        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="status">Status</S.NewArticleLabel>
          <S.NewArticleSelect id="status" value={status} onChange={(e) => changeStatus(e.target.value)}>
            <S.NewArticleSelectOption value='Draft'>Draft</S.NewArticleSelectOption>
            <S.NewArticleSelectOption value='Publish'>Publish</S.NewArticleSelectOption>
          </S.NewArticleSelect>
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="title">Title</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="title" value={title} onChange={(e) => changeTitle(e.target.value)} />
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="smallDescription">Small description</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="smallDescription" value={resume} onChange={(e) => handleResume(e.target.value)}/>
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="urlImage">URL Image</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="urlImage" value={image} onChange={(e) => changeImage(e.target.value)} />
        </S.NewArticleFields>
        {image !== '' && (
          <S.NewArticleFields>
            <S.NewArticlePreview>
              <S.NewArticlePreviewImage src={image} alt={title} />
            </S.NewArticlePreview>
          </S.NewArticleFields>
        )}        
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="category">Category</S.NewArticleLabel>
          <S.NewArticleSelect id="category" value={category} onChange={(e) => changeCategory(e.target.value)}>
            <S.NewArticleSelectOption>Select Category</S.NewArticleSelectOption>
            {categories.map((item) => (
              <S.NewArticleSelectOption key={item.id} value={item.name}>{item.name}</S.NewArticleSelectOption>
            ))}
          </S.NewArticleSelect>
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="content">Content</S.NewArticleLabel>
          <ReactQuill theme="snow" value={content} onChange={changeContent}/>
        </S.NewArticleFields>
        <S.NewArticleButton>
          <Button
            format="secondary"
            handleClick={() => handleSubmit(user.sub)}
            disabled={
              status === '' ||
              title === '' ||
              resume === '' ||
              category === '' ||
              content === ''
            }
          >Submit</Button>
          <S.NewArticleLink to="/my-account">Cancel</S.NewArticleLink>
        </S.NewArticleButton>
      </S.NewArticleContainer>
    </S.NewArticleElement>
  );
};

export default NewArticle;
