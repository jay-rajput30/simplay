import React from "react";
import { useQuery } from "urql";
import { getAllVidoesQuery } from "../videoPageQueries";
// import YouTube from "@u-wave/react-youtube";
import Card from "../../../components/Card/Card";
import { VideoCardsContainer } from "./VideoPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const [result] = useQuery({
    query: getAllVidoesQuery,
  });
  const { data, fetching, error } = result;
  const navigate = useNavigate();
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;

  const cardClickHandler = (id) => {
    console.log({ id });
    // navigate(`/singlevideo${id}`);
  };
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
      <VideoCardsContainer>
        {data.getAllVideos.map((item) => {
          return (
            <Card
              key={item.id}
              video={item}
              onClick={() => cardClickHandler(item.id)}
            />
          );
        })}
        {/* <YouTube
          width={330}
          height={200}
          video="5yTyKmNAxMA"
          suggestedQuality={480}
        /> */}
      </VideoCardsContainer>
    </div>
  );
};

export default VideoPage;
