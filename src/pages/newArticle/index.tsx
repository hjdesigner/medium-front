import React from 'react';
import { Button } from 'components';
import { categories } from 'mocks/categories';
import * as S from './style';

const NewArticle = () => {
  return (
    <S.NewArticleElement>
      <S.NewArticleContainer>
        <S.NewArticleTitle>New Article</S.NewArticleTitle>

        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="status">Status</S.NewArticleLabel>
          <S.NewArticleSelect id="status">
            <S.NewArticleSelectOption>Draft</S.NewArticleSelectOption>
            <S.NewArticleSelectOption>Publish</S.NewArticleSelectOption>
          </S.NewArticleSelect>
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="title">Title</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="title" />
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="smallDescription">Small description</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="smallDescription" />
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="urlImage">URL Image</S.NewArticleLabel>
          <S.NewArticleInput type="text" id="urlImage" />
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="category">Category</S.NewArticleLabel>
          <S.NewArticleSelect id="category">
            {categories.map((item) => (
              <S.NewArticleSelectOption key={item.id}>{item.text}</S.NewArticleSelectOption>
            ))}
          </S.NewArticleSelect>
        </S.NewArticleFields>
        <S.NewArticleFields>
          <S.NewArticleLabel htmlFor="content">Content</S.NewArticleLabel>
          <S.NewArticleTextArea id="content" />
        </S.NewArticleFields>
        <S.NewArticleButton>
          <Button format="secondary" handleClick={() => {}}>Submit</Button>
          <S.NewArticleLink to="/my-account">Cancel</S.NewArticleLink>
        </S.NewArticleButton>
      </S.NewArticleContainer>
    </S.NewArticleElement>
  );
};

export default NewArticle;
