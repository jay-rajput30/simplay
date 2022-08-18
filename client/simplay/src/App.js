// import "./App.css";
import React from "react";
import styled from "styled-components";
import Login from "./pages/login/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/video/VideoPage/VideoPage";
import LikedVideosPage from "./pages/liked/LikedVideosPage/LikedVideosPage";
import AccountPage from "./pages/account/AccountPage/AccountPage";
import HistoryPage from "./pages/history/HistoryPage/HistoryPage";
// import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
// import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
const MainContainer = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<VideoPage />} />
        <Route path="/liked" element={<LikedVideosPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      {/* <MobileNavbar /> */}
      {/* <DesktopNavbar /> */}
    </MainContainer>
  );
}

export default App;
