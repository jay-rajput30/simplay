import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  RiThumbUpFill,
  RiHistoryFill,
  RiHome7Fill,
  RiUserFill,
} from "react-icons/ri";
import { MobileNavbarContainer } from "./MobileNavbar.style";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const navIconCLickHandler = (page) => {
    navigate(page);
  };
  return (
    <MobileNavbarContainer>
      <NavLink to="/home">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiHome7Fill onClick={() => navIconCLickHandler("/home")} />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/liked">
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
            },
          }}
        >
          <RiThumbUpFill onClick={() => navIconCLickHandler("/liked")} />
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
          <RiHistoryFill onClick={() => navIconCLickHandler("/history ")} />
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
          <RiUserFill onClick={() => navIconCLickHandler("/account")} />
        </IconContext.Provider>
      </NavLink>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
