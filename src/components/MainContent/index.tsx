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
  LastArticleTags,
  ReadButton
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
          <TextContent className="idea-item-text">Актуальные статьи из мира программирования
          Текст побольше
          
          </TextContent>
        </GridItem>
        <GridItem className="last-article">
          <GridItemHeader>Последняя статья</GridItemHeader>
          <LastArticleTitle>{lastArticleText}</LastArticleTitle>
          <LastArticleDescription>{lastArtDescription}</LastArticleDescription>
          <LastArticleTags>{lastArticleTags.join(' / ')}</LastArticleTags>
          <ArticleButton>ЧИТАТЬ ДАЛЕЕ</ArticleButton>
        </GridItem>
        <GridItem className="our-mission">
          <GridItemHeader>Наша миссия</GridItemHeader>
          <TextContent>Быть впереди и всегда в курсе последних технологических трендов </TextContent>
        </GridItem>
        <GridItem className="popular-tags">
          <GridItemHeader>Популярные тэги</GridItemHeader>
          <TextContent>
            C++ / Алгоритмы / C / Разработка игр /
            Python / Компиляторы / Scala /  Go /
            Изучение языков / Хранение данных /
          </TextContent>
        </GridItem>
        <GridItem className="future-content-soon"> Future Content Future Content Future Content Future Content Future Content Future ContentFuture Content Future ContentFuture Content Future Content</GridItem>
        <GridItem className="read-button">
          <ReadButton>К СТАТЬЯМ</ReadButton>
        </GridItem>
      </GridContainer>
      
    </MainContentContainer>
  );
};
