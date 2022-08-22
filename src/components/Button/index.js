import React from 'react';
import { string, func, bool } from 'prop-types';
import * as S from './style';

const Button = ({ children, format, handleClick, disabled = false }) => {
  return (
    <S.ButtonElement format={format} onClick={handleClick} disabled={disabled}>{children}</S.ButtonElement>
  );
};

Button.propTypes = {
	format: string.isRequired,
	children: string.isRequired,
	handleClick: func.isRequired,
	disabled: bool,
};

export default Button;
