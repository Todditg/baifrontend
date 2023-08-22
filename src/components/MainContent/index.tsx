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
  LastArticleDescription,
  LastArticleTags
} from "./style";
import { IItemsProps } from "../MainPage/types";

export const MainContent = ({
  lastArticleText = "Волновой алгоритм",
  lastArtDescription = "Алгоритм поиска кратчайшего пути. Принадлежит к алгоритмам, основанным на методах поиска \n" +
    "в ширину.",
  lastArticleTags = ['C++', 'Алгоритмы'],
}: IItemsProps): React.ReactElement => {
  return (
    <MainContentContainer>
      <MainTitle>Программирование во всей красе</MainTitle>
      <GridContainer>
        <GridItem className="idea-item">
          <GridItemHeader>Наша Идея</GridItemHeader>
          <TextContent>Актуальные статьи из мира программирования 
          Актуальные статьи из мира программирования
          Актуальные статьи из мира программирования
          
          </TextContent>
        </GridItem>
        <GridItem className="last-article">
          <GridItemHeader>Последняя статья</GridItemHeader>
          <LastArticleTitle>{lastArticleText}</LastArticleTitle>
          <LastArticleDescription>{lastArtDescription}</LastArticleDescription>
          <LastArticleTags>{lastArticleTags.join(' / ')}</LastArticleTags>
          <ArticleButton>ЧИТАТЬ ДАЛЕЕ</ArticleButton>
        </GridItem>
        <GridItem className="our-mission">sdfsdf</GridItem>
        <GridItem className="popular-tags">sdfsdf </GridItem>
        <GridItem className="future-content-soon"> Future Content Future Content Future Content Future Content Future Content Future ContentFuture Content Future ContentFuture Content Future Content</GridItem>
      </GridContainer>
    </MainContentContainer>
  );
};
