import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

// Importing components
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logoImg} />
        <form>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="/">Esqueci minha senha</a>
        </form>
        <a href="/">
          <FiLogIn />
          Criar conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
