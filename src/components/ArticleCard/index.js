import React from 'react';
import { object, string } from 'prop-types';
import * as S from './style';

const ArticleCard = ({ item, size }) => {
  return (
    <S.ArticleElement>
      <S.ArticleContext size={size} data-testid="content">
        <S.ArticleTitle size={size}>{item.title}</S.ArticleTitle>
        <S.ArticleResume size={size}>{item.resume}</S.ArticleResume>
        <S.ArticleButtonContainer>
          <S.ArticleButton to={`/article/${item.link}`} size={size}>Read more</S.ArticleButton>
        </S.ArticleButtonContainer>
      </S.ArticleContext>
      <S.ArticleImagemContainer size={size} data-testid="image">
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
};

export default ArticleCard;
