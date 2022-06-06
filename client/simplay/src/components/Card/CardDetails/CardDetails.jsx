import React from "react";
import CardDetailAvatar from "./CardDetailAvatar";
import CardDetailLikes from "./CardDetailLikes";
import { CardDetailsContainer, CardVideoDetails } from "./CardDetails.styles";
import CardDetailTitle from "./CardDetailTitle";
import CardDetailViews from "./CardDetailViews";

const CardDetails = ({ video }) => {
  const { views, title, thumbnail, likes } = video;
  return (
    <CardDetailsContainer>
      <CardDetailAvatar avatar={thumbnail.image} />
      <CardVideoDetails>
        <CardDetailTitle>{title.slice(0, 40) + "..."}</CardDetailTitle>
        <CardDetailViews>{views + " views"}</CardDetailViews>
        <CardDetailLikes likes={likes} />
      </CardVideoDetails>
    </CardDetailsContainer>
  );
};

export default CardDetails;
