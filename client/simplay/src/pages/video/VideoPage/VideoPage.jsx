import React from "react";
import { useQuery } from "urql";
import { getAllVidoesQuery } from "../videoPageQueries";
import YouTube from "@u-wave/react-youtube";
const VideoPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getAllVidoesQuery,
  });
  const { data, fetching, error } = result;
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;
  console.log({ data });
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        border: "2px solid red",
      }}
    >
      <h2>this is the video listing page</h2>
      <div
        style={{
          margin: "1rem",
          border: "2px solid yellow",
        }}
      >
        <YouTube
          width={330}
          height={200}
          video="5yTyKmNAxMA"
          suggestedQuality={480}
        />
      </div>
    </div>
  );
};

export default VideoPage;
