import React from "react";
import CardDetailAvatar from "./CardDetailAvatar";
import CardDetailLikes from "./CardDetailLikes";
import { CardDetailsContainer, CardVideoDetails } from "./CardDetails.styles";
import CardDetailTitle from "./CardDetailTitle";
import CardDetailViews from "./CardDetailViews";
import { useMutation } from "urql";
import { updateLikeCountMutation } from "../../../pages/video/videoPageQueries";

const CardDetails = ({ video }) => {
  const { id, views, title, thumbnail, likes } = video;

  const [, updateLikeHandler] = useMutation(updateLikeCountMutation);

  const likeBtnClickHandler = async () => {
    // console.log("like button click handler is called ");
    try {
      const updateLikeResult = await updateLikeHandler({ videoId: id });
      console.log({
        updateLikeResult: updateLikeResult.data.updateUserLikedVideos,
      });
    } catch (e) {
      console.error("something went wrong" + e);
    }
  };

  return (
    <CardDetailsContainer>
      <CardDetailAvatar avatar={thumbnail.image} />
      <CardVideoDetails>
        <CardDetailTitle>{title.slice(0, 40) + "..."}</CardDetailTitle>
        <CardDetailViews>{views + " views"}</CardDetailViews>
        <CardDetailLikes
          likes={likes}
          likeBtnClickHandler={likeBtnClickHandler}
        />
      </CardVideoDetails>
    </CardDetailsContainer>
  );
};

export default CardDetails;
