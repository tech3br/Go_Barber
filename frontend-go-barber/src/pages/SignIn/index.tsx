/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

// Importing components
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O email é obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logoImg} />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
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
