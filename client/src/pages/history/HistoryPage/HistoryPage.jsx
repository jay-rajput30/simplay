import React from "react";
import { useQuery } from "@apollo/client";
import Card from "../../../components/Card/Card";
import { getUserHistory } from "../historyPageQueries";
import { HistoryPageContainer } from "./HistoryPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
import { getToken } from "../../../auth";
const HistoryPage = () => {
  const { data, fetching, error } = useQuery(getUserHistory, {
    context: {
      headers: { Authorization: getToken() ? getToken().token : "" },
    },
    // fetchPolicy: "network-only",
  });

  // const { data, fetching, error } = result;
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;
  console.log({history: data});
  return (
    <HistoryPageContainer>
      <DesktopNavbar />
      <MobileNavbar />
      {/* {data.historyVideos.history.map((item) => {
        return <Card video={item} />;
      })} */}
    </HistoryPageContainer>
  );
};

export default HistoryPage;
