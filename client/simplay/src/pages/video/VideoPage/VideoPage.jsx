import React from "react";
import { useQuery } from "urql";
import { getAllVidoesQuery } from "../videoPageQueries";
// import YouTube from "@u-wave/react-youtube";
import Card from "../../../components/Card/Card";
import { VideoCardsContainer } from "./VideoPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
const VideoPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getAllVidoesQuery,
  });
  const { data, fetching, error } = result;
  console.log({ videoData: data });
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
      <VideoCardsContainer>
        {data.getAllVideos.map((item) => {
          return <Card key={item.id} video={item} />;
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
