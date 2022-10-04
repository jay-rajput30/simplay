import React from "react";
import { useQuery } from "@apollo/client";
import { getLikedVideosQuery } from "../likedVideosPageQueries";
import { LikedPageContainer } from "./LikedVideosPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
import { getToken } from "../../../auth";
const LikedVideosPage = () => {
  const [result, reexecuteQuery] = useQuery(getLikedVideosQuery, {
    context: {
      header: { Authorization: getToken() ? getToken().token : "" },
    },
  });
  const { data, loading, error } = result;
  console.log({ liked: data, result });
  return (
    <LikedPageContainer>
      <DesktopNavbar />
      <MobileNavbar />
    </LikedPageContainer>
  );
};

export default LikedVideosPage;
