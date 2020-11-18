import styled from 'styled-components';

export const Input = styled.input`
  background: #232129;
  color: #f4ede8;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  &::placeholder {
    color: #f4ede8;
  }

  & + input {
    margin-top: 8px;
  }
`;
