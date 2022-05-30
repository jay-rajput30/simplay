import React from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  RiThumbUpFill,
  RiHistoryFill,
  RiHome7Fill,
  RiUserFill,
} from "react-icons/ri";
import { MobileNavbarContainer } from "./MobileNavbar.style";

const MobileNavbar = () => {
  return (
    <MobileNavbarContainer>
      <NavLink to="/">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiHome7Fill />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/likedvideos">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiThumbUpFill />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/history">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiHistoryFill />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/account">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiUserFill />
        </IconContext.Provider>
      </NavLink>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
