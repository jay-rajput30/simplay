import React from "react";
import { CardContainer } from "./Card.styles";
import CardDetails from "./CardDetails/CardDetails";
import CardImage from "./CardImage";

const Card = ({ video }) => {
  const { thumbnailImage } = video;
  return (
    <CardContainer>
      <CardImage thumbnailImage={thumbnailImage} />
      <CardDetails video={video} />
    </CardContainer>
  );
};

export default Card;
