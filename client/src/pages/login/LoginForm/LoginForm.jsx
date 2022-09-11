import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "urql";
import { LoginMutation } from "../loginQueries";
import {
  LoginForm,
  Input,
  FormHeader,
  Button,
  ButtonContainer,
} from "./LoginForm.styles";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginResult, login] = useMutation(LoginMutation);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const btnClickHandler = async (e) => {
    const { name } = e.target;
    if (
      (formData.email === "" || formData.password === "") &&
      name !== "guest"
    ) {
      alert("invalid credentials");
    }
    try {
      const result = await login(formData);
      if (result.error) {
        console.error("oh no something went wrong", result.error);
      }
      console.log({ result });
      localStorage.setItem("token", {
        token: result.data.login.token,
        expiry: result.data.login.expiry,
      });
      navigate("/");
    } catch (e) {
      console.log({ error: e });
    }
  };

  const guestBtnClickHandler = async () => {
    try {
      const result = await login({
        email: "testtwo@gmail.com",
        password: "testtwo",
      });
      if (result.error) {
        console.error("oh no something went wrong", result.error);
      }
      console.log({ result });
      localStorage.setItem("token", {
        token: result.data.login.token,
        expiry: result.data.login.expiry,
      });
      navigate("/");
    } catch (e) {
      console.log({ error: e });
    }
  };

  return (
    <>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <FormHeader>SIMPLAY</FormHeader>
        <Input
          type="email"
          placeholder="email"
          name="email"
          onChange={inputChangeHandler}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={inputChangeHandler}
        />
        <ButtonContainer>
          <Button onClick={btnClickHandler} name="login">
            login
          </Button>
          <Button onClick={guestBtnClickHandler} name="guest">
            guest
          </Button>
        </ButtonContainer>
      </LoginForm>
    </>
  );
}

export default Login;
