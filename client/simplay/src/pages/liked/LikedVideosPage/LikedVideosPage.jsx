import React from "react";
import { useQuery } from "urql";
import { getLikedVideosQuery } from "../likedVideosPageQueries";
import { LikedPageContainer } from "./LikedVideosPage.styles";

const LikedVideosPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getLikedVideosQuery,
  });
  const { data, loading, error } = result;
  console.log({ liked: data });
  return <LikedPageContainer></LikedPageContainer>;
};

export default LikedVideosPage;
