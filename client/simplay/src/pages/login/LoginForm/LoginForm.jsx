import React from "react";
import styled from "styled-components";
import { LoginForm, Input } from "./LoginForm.styles";

function Login() {
  return (
    <LoginForm>
      <Input type="text" placeholder="email" />
      <Input type="text" placeholder="password" />
    </LoginForm>
  );
}

export default Login;
