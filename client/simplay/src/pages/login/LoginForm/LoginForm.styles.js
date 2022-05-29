import styled from "styled-components";

export const LoginForm = styled.form`
  height: 100%;
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
  &::-webkit-input-placeholder {
    /* Edge */
    color: var(--clr-body-text);
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--clr-body-text);
  }

  &::placeholder {
    color: var(--clr-body-text);
  }
`;
