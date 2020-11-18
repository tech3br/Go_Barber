import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = props => {
  return <S.Input {...props} />;
};

export default Input;
