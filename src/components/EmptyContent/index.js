import React from 'react';
import { string } from 'prop-types';
import * as S from './style';

const EmptyContent = ({ children }) => {
  return (
    <S.EmptyContentElement>
      <S.EmptyIcon />
      <S.EmptyContentText>{children}</S.EmptyContentText>
    </S.EmptyContentElement>
  );
};

EmptyContent.propTypes = {
	children: string.isRequired,
};


export default EmptyContent;
