/* eslint-disable no-console */
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
// Importing components
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import * as S from './styles';

type HandleSubmitProps = { name: string; email: string; password: string };

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: HandleSubmitProps) => {
    try {
      formRef.current?.setErrors({});

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
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <S.AnimationContainer>
          <S.Logo src={logoImg} />

          <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
