import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./Card.styles";
import CardDetails from "./CardDetails/CardDetails";
import CardImage from "./CardImage";

const Card = ({ video }) => {
  const { thumbnailImage,id } = video;
  const navigate = useNavigate()
  const cardClickHandler = (id)=>{
    console.log(id)
    navigate(`/singlevideo/${id}`)
  }
  return (
    <CardContainer onClick={()=>cardClickHandler(id)}>
      <CardImage thumbnailImage={thumbnailImage} />
      <CardDetails video={video} />
    </CardContainer>
  );
};

export default Card;
