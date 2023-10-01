import React from "react";
import { Header } from "../../components/Header";
import { 
    MainTitle,
    MainContentContainer

} from "../../components/MainContent/style";
import { MainContainer } from "../MainPage/style";
import { ArticleBriefBlock } from "../../components/ArticleBrief";

export const ArticleList = (): React.ReactElement => {
  return (
    <MainContainer>
    <Header/>
    <MainContentContainer>
        <MainTitle>Статьи</MainTitle>
        <ArticleBriefBlock></ArticleBriefBlock>
        <ArticleBriefBlock></ArticleBriefBlock>
        <ArticleBriefBlock></ArticleBriefBlock>
        <ArticleBriefBlock></ArticleBriefBlock>
    </MainContentContainer>
    </MainContainer>
  );
};