// import "./App.css";
import React from "react";
import styled from "styled-components";
import Login from "./pages/login/LoginForm/LoginForm";

const MainContainer = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
}

export default App;
