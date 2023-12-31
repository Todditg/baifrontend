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
  ReadButton,
  StyledLink,
} from "./style";
import { IItemsProps } from "../../Pages/MainPage/types";
import { Link } from "react-router-dom";


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
          <Link to="article_id"><ArticleButton>ЧИТАТЬ ДАЛЕЕ</ArticleButton></Link>
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
          <StyledLink to="/article_list">
            <ReadButton>К СТАТЬЯМ</ReadButton>
          </StyledLink>
        </GridItem>
      </GridContainer>
      
    </MainContentContainer>
  );
};
