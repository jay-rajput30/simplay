import React from "react";
import { CardAvatarImage } from "./CardDetails.styles";

const CardDetailAvatar = ({ avatar }) => {
  console.log(avatar);
  return <CardAvatarImage src={avatar} alt="a placeholder" />;
};

export default CardDetailAvatar;
