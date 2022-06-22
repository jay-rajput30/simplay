import React from "react";
import { CardDetailsLike, LikesContainer } from "./CardDetails.styles";
import { IconContext } from "react-icons";
import { RiThumbUpLine } from "react-icons/ri";

const CardDetailLikes = ({ likes, likeBtnClickHandler }) => {
  // eslint-disable-next-line

  return (
    <LikesContainer>
      <IconContext.Provider
        value={{
          style: {
            color: "var(--clr-heading-text)",
            fontSize: "var(--length-md-3)",
            display: "inline",
            marginRight: "0.5rem",
          },
        }}
      >
        <RiThumbUpLine onClick={likeBtnClickHandler} />
      </IconContext.Provider>
      <CardDetailsLike>{likes} likes</CardDetailsLike>
    </LikesContainer>
  );
};

export default CardDetailLikes;
