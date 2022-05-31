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

const DesktopNavbar = () => {
  return (
    <DesktopNavbarContainer>
      <DesktopNavbarItem>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiHome7Fill />
        </IconContext.Provider>
        <span>home</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiThumbUpFill />
        </IconContext.Provider>
        <span>liked</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiHistoryFill />
        </IconContext.Provider>
        <span>history</span>
      </DesktopNavbarItem>
      <DesktopNavbarItem>
        <IconContext.Provider
          value={{
            className: "desktop--navbar--icon",
          }}
        >
          <RiUserFill />
        </IconContext.Provider>
        <span>account</span>
      </DesktopNavbarItem>
      <button>logout</button>
    </DesktopNavbarContainer>
  );
};

export default DesktopNavbar;
