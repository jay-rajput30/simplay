import React from "react";
import { useQuery } from "urql";
import Card from "../../../components/Card/Card";
import { getUserHistory } from "../historyPageQueries";
import { HistoryPageContainer } from "./HistoryPage.styles";
import DesktopNavbar from "../../../components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../../../components/Navbar/MobileNavbar/MobileNavbar";
const HistoryPage = () => {
  const [result, reExecuteQuery] = useQuery({ query: getUserHistory });

  const { data, fetching, error } = result;
  if (fetching) return <h1>loading...</h1>;
  if (error) return <h1>Oh something went wrong! {error.message}</h1>;
  console.log(data.getUserHistory.history);
  return (
    <HistoryPageContainer>
      <DesktopNavbar />
      <MobileNavbar />
      {data.getUserHistory.history.map((item) => {
        return <Card video={item} />;
      })}
    </HistoryPageContainer>
  );
};

export default HistoryPage;
