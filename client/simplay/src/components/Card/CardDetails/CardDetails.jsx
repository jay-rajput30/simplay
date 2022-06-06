import React from "react";
import CardDetailAvatar from "./CardDetailAvatar";
import { CardDetailsContainer, CardVideoDetails } from "./CardDetails.styles";
import CardDetailTitle from "./CardDetailTitle";
import CardDetailViews from "./CardDetailViews";

const CardDetails = ({ video }) => {
  const { views, title, thumbnail } = video;
  return (
    <CardDetailsContainer>
      <CardDetailAvatar avatar={thumbnail.image} />
      <CardVideoDetails>
        <CardDetailTitle>{title}</CardDetailTitle>
        <CardDetailViews>{views}</CardDetailViews>
      </CardVideoDetails>
    </CardDetailsContainer>
  );
};

export default CardDetails;
