import React from "react";
import { useQuery } from "@apollo/client";
import { getLikedVideosQuery } from "../likedVideosPageQueries";
import { LikedPageContainer } from "./LikedVideosPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
const LikedVideosPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getLikedVideosQuery,
  });
  const { data, loading, error } = result;
  console.log({ liked: data });
  return (
    <LikedPageContainer>
      <DesktopNavbar />
      <MobileNavbar />
    </LikedPageContainer>
  );
};

export default LikedVideosPage;
