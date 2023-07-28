import { MainContainer } from "./style";
import React from "react";
import { Header } from "../Header";
import { MainContent } from "../MainContent";

export const MainPage = (): React.ReactElement => {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
};
