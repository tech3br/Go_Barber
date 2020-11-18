import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

// Importing components
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

type HandleSubmitProps = { name: string; email: string; password: string };

const SignUp: React.FC = () => {
  const handleSubmit = (data: HandleSubmitProps): void => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <S.Logo src={logoImg} />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input
            autoComplete="current-name"
            name="name"
            icon={FiUser}
            placeholder="Nome"
          />
          <Input
            autoComplete="current-email"
            name="email"
            icon={FiMail}
            placeholder="Email"
          />
          <Input
            autoComplete="current-password"
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para login
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
