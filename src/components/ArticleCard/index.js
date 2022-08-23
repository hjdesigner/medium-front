import React from 'react';
import { func, object, string } from 'prop-types';
import { Bookmark } from '@styled-icons/bootstrap';
import * as S from './style';

const ArticleCard = ({ item, size, handleClickBookmarks }) => {
  const limitTitle = (text, size) => {
    if (size === 'small' && text.length >= 70) {
      return `${text.substring(0,70)}...`;
    }
    return text;
  }

  return (
    <S.ArticleElement>
      <S.ArticleContext size={size} data-testid="content">
        <S.ArticleTitle size={size}>{limitTitle(item.title, size)}</S.ArticleTitle>
        <S.ArticleResume size={size}>{item.resume}</S.ArticleResume>
        <S.ArticleButtonContainer>
          <S.ArticleButton to={`/article/${item.link}`} size={size}>Read more</S.ArticleButton>
        </S.ArticleButtonContainer>
      </S.ArticleContext>
      <S.ArticleImagemContainer size={size} data-testid="image">
        <S.ArticleButtonBookmarks onClick={handleClickBookmarks}><Bookmark /></S.ArticleButtonBookmarks>
        <S.ArticleImage
          src={item.image === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NClpQrO6iEc4y3gKTRIFEB3LDKN2J_mKQ&usqp=CAU' : item.image }
          alt={item.title}
        />
      </S.ArticleImagemContainer>
    </S.ArticleElement>
  );
};

ArticleCard.propTypes = {
	item: object.isRequired,
	size: string.isRequired,
  handleClickBookmarks: func.isRequired,
};

export default ArticleCard;
