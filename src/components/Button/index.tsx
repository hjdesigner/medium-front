import React from 'react';
import * as S from './style';

export type ButtonProps = {
  format: 'primary' | 'secondary';
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, format, handleClick } : ButtonProps) => {
  return (
    <S.ButtonElement format={format} onClick={handleClick}>{children}</S.ButtonElement>
  );
};

export default Button;
