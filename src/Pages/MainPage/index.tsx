import { MainContainer } from "./style";
import React from "react";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";


export const MainPage = (): React.ReactElement => {
  return (
    <MainContainer>
      <Header />
      <MainContent />
    </MainContainer>
  );
};
