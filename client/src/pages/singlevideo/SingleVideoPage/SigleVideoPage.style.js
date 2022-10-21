import styled from "styled-components";
import YouTube from "@u-wave/react-youtube";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  & h2 {
    padding: 0.5rem;
  }
`;

export const StyledYoutube = styled(YouTube)`
  width: 365px;
  height: 250px;
  @media screen and (min-width: 765px) {
    width: 970px;
    height: 450px;
  }
`;

export const LikeCountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.7rem 0rem;

  & p {
    margin-left: 1rem;
  }
`;

export const VideoDetailsContainer = styled.div`
  padding: 0.5rem;
`;
