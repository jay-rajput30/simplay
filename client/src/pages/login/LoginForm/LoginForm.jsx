import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LoginMutation } from "../loginQueries";
import {
  LoginForm,
  Input,
  FormHeader,
  Button,
  ButtonContainer,
} from "./LoginForm.styles";
import { login } from "../../../auth";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [mutate, result] = useMutation(LoginMutation);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const invalidCredentials = (name, formData) => {
    if (
      (formData.email === "" || formData.password === "") &&
      name !== "guest"
    ) {
      return true;
    }

    return false;
  };

  const btnClickHandler = async (e) => {
    console.log("inside login click handler");
    const { name } = e.target;
    if (invalidCredentials(name, formData)) {
      alert("invalid credentials");
    }
    try {
      const { token, expiry } = await login(formData);
      // console.log({ response });
      // const { data } = await mutate({
      //   variables: {
      //     email: formData.email,
      //     password: formData.password,
      //   },
      // });
      // console.log({ data });
      localStorage.setItem(
        "simplaytoken",
        JSON.stringify({
          token
        })
      );
      // console.log("login was successful", {token, expiry})
      navigate("/home");
    } catch (e) {
      console.log({ error: e });
    }
  };

  const guestBtnClickHandler = async () => {
    try {
      const data = await mutate({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      if (data.error) {
        console.error("oh no something went wrong", result.error);
      }
      console.log({ result });
      localStorage.setItem("simplaytoken", {
        token: result.data.login.token,
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
