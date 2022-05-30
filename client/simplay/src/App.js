// import "./App.css";
import React from "react";
import styled from "styled-components";
import Login from "./pages/login/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/video/VideoPage/VideoPage";
const MainContainer = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<VideoPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
