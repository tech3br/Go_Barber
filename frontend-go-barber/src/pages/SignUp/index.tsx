/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

// Importing components
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

type HandleSubmitProps = { name: string; email: string; password: string };

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: HandleSubmitProps) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .required('O email é obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(
          8,
          'A senha deve ter no mínimo 8 caracteres',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
