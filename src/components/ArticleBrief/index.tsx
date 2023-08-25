import React from 'react';
import { ArticleBriefBlockStyled, ArticleBriefButton, ArticleDescription, ArticleTags, ArticleTitle, TitleAndTagsContainer } from './styled';
import { IItemsProps } from "../../Pages/MainPage/types";


export const ArticleBriefBlock = ({
    lastArticleText = "Волновой алгоритм",
    lastArtDescription = "Алгоритм поиска кратчайшего пути. Принадлежит к алгоритмам, основанным на методах поиска \n" +
      "в ширину. Рыба про быбу рыбную сначала соленая, а потом нет. В общем и целом тут текст.",
    lastArticleTags = ['C++', 'Алгоритмы'],
  }: IItemsProps): React.ReactElement => {
    return (
        <ArticleBriefBlockStyled>
            <TitleAndTagsContainer>
                <ArticleTitle>{lastArticleText}</ArticleTitle>
                <ArticleTags>{lastArticleTags.join(' / ')}</ArticleTags>
            </TitleAndTagsContainer>
            <ArticleDescription>{lastArtDescription}</ArticleDescription>
            <ArticleBriefButton></ArticleBriefButton>
        </ArticleBriefBlockStyled>
        
    );
};
