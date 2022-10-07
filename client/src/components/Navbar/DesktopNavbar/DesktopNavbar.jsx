import React from "react";
import {
  DesktopNavbarContainer,
  DesktopNavbarItem,
} from "./DesktopNavbar.style";
import { IconContext } from "react-icons";
import {
  RiThumbUpFill,
  RiHistoryFill,
  RiHome7Fill,
  RiUserFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const DesktopNavbar = () => {
  const navigate = useNavigate();

  const navIconCLickHandler = (page) => {
    navigate(page);
  };
  const logoutClickHandler = () => {
    console.log("logout clicked");
    localStorage.removeItem("simplayToken");
    navigate("/login");
  };
  return (
    <DesktopNavbarContainer>
      <DesktopNavbarItem onClick={() => navIconCLickHandler("/home")}>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiHome7Fill />
        </IconContext.Provider>
        <span>home</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem onClick={() => navIconCLickHandler("/liked")}>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiThumbUpFill />
        </IconContext.Provider>
        <span>liked</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem onClick={() => navIconCLickHandler("/history")}>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiHistoryFill />
        </IconContext.Provider>
        <span>history</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem onClick={() => navIconCLickHandler("/account")}>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiUserFill />
        </IconContext.Provider>
        <span>account</span>
      </DesktopNavbarItem>
      <button onClick={logoutClickHandler}>logout</button>
    </DesktopNavbarContainer>
  );
};

export default DesktopNavbar;
