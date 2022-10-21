import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SigleVideoPage.style";

import { useQuery } from "@apollo/client";
import { singleVideoQuery } from "../SingleVideoQueries";
import { getToken } from "../../../auth";
import {
  LikeCountContainer,
  StyledYoutube,
  VideoContainer,
  VideoDetailsContainer,
} from "./SigleVideoPage.style";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { RiArrowLeftFill, RiThumbUpLine } from "react-icons/ri";

const SingleVideoPage = () => {
  const { id } = useParams();
  console.log("inside single video" + id);
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(singleVideoQuery, {
    variables: { id },
    context: {
      headers: { Authorization: getToken() ? getToken().token : "" },
    },
    fetchPolicy: "network-only",
  });

  const youtubeVideoId = data && data.video.link.slice(17);
  console.log({ data, youtubeVideoId });
  return (
    <>
      <VideoContainer>
        <IconContext.Provider
          value={{
            style: {
              color: "var(--clr-heading-text)",
              fontSize: "var(--length-md-3)",
              margin: "0rem 0rem 0.5rem 0.8rem",
              alignSelf: "flex-start",
            },
          }}
        >
          <RiArrowLeftFill onClick={()=> navigate("/home")}/>
        </IconContext.Provider>
        <StyledYoutube
          video={`${youtubeVideoId}`}
          // suggestedQuality={480}
          allowFullscreen={true}
        />
        <VideoDetailsContainer>
          <LikeCountContainer>
            <IconContext.Provider
              value={{
                style: {
                  color: "var(--clr-heading-text)",
                  fontSize: "var(--length-md-3)",
                },
              }}
            >
              <RiThumbUpLine />
            </IconContext.Provider>
            <p>{data && data.video.likes} people like this</p>
          </LikeCountContainer>
          <p>{data && data.video.thumbnail.description}</p>
        </VideoDetailsContainer>
      </VideoContainer>
    </>
  );
};

export default SingleVideoPage;
