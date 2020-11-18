import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => {
  return <S.Button {...props} />;
};

export default Button;
