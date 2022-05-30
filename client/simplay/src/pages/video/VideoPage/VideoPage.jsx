import React from "react";
import { useQuery } from "urql";
import { getAllVidoesQuery } from "../videoPageQueries";

const VideoPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getAllVidoesQuery,
  });
  const { data, fetching, error } = result;
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;
  console.log({ data });
  return <div>this isthe video listing page</div>;
};

export default VideoPage;
