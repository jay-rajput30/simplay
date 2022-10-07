import React from "react";
import { useParams } from "react-router-dom";
import "./SigleVideoPage.style";
// import YouTube from "@u-wave/react-youtube";
import { useQuery } from "@apollo/client";
import { singleVideoQuery } from "../SingleVideoQueries";
import { getToken } from "../../../auth";

const SingleVideoPage = () => {
  const { id } = useParams();
  console.log("inside single video" + id);
  const { data, loading, error } = useQuery(singleVideoQuery, {
    variables: { id },
    context: {
      headers: { Authorization: getToken() ? getToken().token : "" },
    },
    fetchPolicy: "network-only",
  });
  console.log({ singlevideo: data });
  return (
    <>
      <h2>this is the single video page</h2>;
      {/* <YouTube
        width={330}
        height={200}
        video="5yTyKmNAxMA"
        // suggestedQuality={480}
      /> */}
    </>
  );
};

export default SingleVideoPage;
