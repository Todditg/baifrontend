import { MainContainer } from "../MainPage/style";
import React from "react";
import { Header } from "../../components/Header";
import { WelcomeSubTitle, WelcomeTitle } from "./style";
import { MainContentContainer } from "../../components/MainContent/style";
import { BrokenButton } from "./style";

export const ComingSoon = (): React.ReactElement => {
  return (
    <MainContentContainer>
      <Header />
      <WelcomeTitle>Добро пожаловать!</WelcomeTitle>
      <WelcomeSubTitle>Проект еще находится в разработке...</WelcomeSubTitle>
      <BrokenButton>И эта кнопка тоже скоро будет работать</BrokenButton>
    </MainContentContainer>
  );
};
