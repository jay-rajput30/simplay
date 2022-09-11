import React from "react";
import { Image } from "./Card.styles";

const CardImage = ({ thumbnailImage }) => {
  return <Image src={thumbnailImage} alt="a placeholder" />;
};

export default CardImage;
