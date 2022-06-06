import React from "react";
import { CardDetailsLike, LikesContainer } from "./CardDetails.styles";
import { IconContext } from "react-icons";
import { RiThumbUpFill } from "react-icons/ri";
const CardDetailLikes = ({ likes }) => {
  return (
    <LikesContainer>
      <IconContext.Provider
        value={{
          style: {
            color: "var(--clr-heading-text)",
            fontSize: "var(--length-md-2)",
            display: "inline",
            paddingTop: "0.5rem",
          },
        }}
      >
        <RiThumbUpFill />
      </IconContext.Provider>
      <CardDetailsLike>{likes} likes</CardDetailsLike>
    </LikesContainer>
  );
};

export default CardDetailLikes;
