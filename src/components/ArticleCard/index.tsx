import React from 'react';
import * as S from './style';

export type ArticleCardProps = {
  item: {
    title: string;
    resume: string;
    link: string;
    image: string;
  };
  size: 'small' | 'large';
};

const ArticleCard = ({ item, size } : ArticleCardProps) => {
  return (
    <S.ArticleElement>
      <S.ArticleContext size={size} data-testid="content">
        <S.ArticleTitle size={size}>{item.title}</S.ArticleTitle>
        <S.ArticleResume size={size}>{item.resume}</S.ArticleResume>
        <S.ArticleButtonContainer>
          <S.ArticleButton to={item.link} size={size}>Read more</S.ArticleButton>
        </S.ArticleButtonContainer>
      </S.ArticleContext>
      <S.ArticleImagemContainer size={size} data-testid="image">
        <S.ArticleImage src={item.image} alt={item.title} />
      </S.ArticleImagemContainer>
    </S.ArticleElement>
  );
};

export default ArticleCard;
