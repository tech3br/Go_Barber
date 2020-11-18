import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

// Importing components
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <S.Logo src={logoImg} />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="login">
          <FiArrowLeft />
          Voltar para login
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
