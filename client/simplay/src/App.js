// import "./App.css";
import React from "react";
import styled from "styled-components";
import Login from "./pages/login/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/video/VideoPage/VideoPage";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
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
      <MobileNavbar />
    </MainContainer>
  );
}

export default App;
