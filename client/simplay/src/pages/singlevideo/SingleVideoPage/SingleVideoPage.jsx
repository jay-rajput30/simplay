import React from "react";
import { useParams } from "react-router-dom";
import "./SigleVideoPage.style";

const SingleVideoPage = () => {
  const { id } = useParams();
  return <h2>this is the single video page</h2>;
};

export default SingleVideoPage;
