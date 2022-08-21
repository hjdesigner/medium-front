import React from 'react';
import { string, func } from 'prop-types';
import * as S from './style';

const Button = ({ children, format, handleClick }) => {
  return (
    <S.ButtonElement format={format} onClick={handleClick}>{children}</S.ButtonElement>
  );
};

Button.propTypes = {
	format: string.isRequired,
	children: string.isRequired,
	handleClick: func.isRequired,
};

export default Button;
