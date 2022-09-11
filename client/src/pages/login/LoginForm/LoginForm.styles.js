import styled from "styled-components";

export const LoginForm = styled.form`
  height: 100%;
  width: 100%;
  ${"" /* border: 2px solid red; */}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: var(--clr-background);
  margin-bottom: var(--space-2);
  border: none;
  border-bottom: 2px solid var(--clr-border);
  color: var(--clr-body-text);
  &::-webkit-input-placeholder {
    color: var(--clr-body-text);
  }

  &:-ms-input-placeholder {
    color: var(--clr-body-text);
  }

  &::placeholder {
    color: var(--clr-body-text);
  }
`;

export const FormHeader = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: var(--space-5);
`;

export const Button = styled.button`
  margin-bottom: var(--space-2);
  background-color: var(--clr-primary);
  border: none;
  font-weight: bold;
  text-transform: capitalize;
  padding: var(--space-1) var(--space-2);
  border-radius: 7px;

  &:first-child {
    margin-right: var(--space-2);
  }
`;

export const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
