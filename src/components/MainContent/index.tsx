import React from "react";
import {
  ArticleButton,
  GridContainer,
  GridItem,
  GridItemHeader,
  MainContentContainer,
  MainTitle,
  TextContent,
  LastArticleTitle,
  LastArcDescription
} from "./style";
import { IItemsProps } from "../MainPage/types";

export const MainContent = ({
  lastArticleText = "Волновой алгоритм",
  lastArtDescription = "алгоритм поиска кратчайшего пути. Принадлежит к алгоритмам, основанным на методах поиска \n" +
    "в ширину."
}: IItemsProps): React.ReactElement => {
  return (
    <MainContentContainer>
      <MainTitle>Программирование во всей красе</MainTitle>
      <GridContainer>
        <GridItem className="idea-item">
          <GridItemHeader>Наша Идея</GridItemHeader>
          <TextContent>Актуальные статьи из мира программирования </TextContent>
        </GridItem>
        <GridItem className="last-article">
          <GridItemHeader>Последняя статья</GridItemHeader>
          <LastArticleTitle>{lastArticleText}</LastArticleTitle>
          <LastArcDescription>{lastArtDescription}</LastArcDescription>
          <ArticleButton>ЧИТАТЬ ДАЛЕЕ</ArticleButton>
        </GridItem>
        <GridItem className="our-mission">sdfsdf</GridItem>
        <GridItem className="popular-tags">sdfsdf</GridItem>
        <GridItem className="future-content-soon">sdfsdf</GridItem>
      </GridContainer>
    </MainContentContainer>
  );
};
