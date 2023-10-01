import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MainContainer } from "../MainPage/style";
import { IItemsProps } from "../../Pages/MainPage/types";
import {
    ArticleDetailsMainContentContainer, 
    ArticleSubTitle,
    ArticleTagsStyled,
    ArticleText, 
    ArticleTitleStyled,
    CodeBlock,
    CodeBlockText, 
    CodeBlockTitle, 
    TitleAndTagsContainerStyled, 
    Triangle,
} from "./style"



export const ArticleDetails = ({
    lastArticleText = "Волновой алгоритм",
    lastArtDescription = "Алгоритм поиска кратчайшего пути. Принадлежит к алгоритмам, основанным на методах поиска \n" +
      "в ширину. Рыба про быбу рыбную сначала соленая, а потом нет. В общем и целом тут текст.",
    lastArticleTags = ['C++', 'Алгоритмы'],
  }: IItemsProps, ): React.ReactElement => 
  {
    const [isCodeOpen, setIsCodeOpen] = useState(false);
    let CodeBlockTextInput = String.raw`
    template <>  
        struct BasicWrapper<kCave> final {    
            using data_type = std::vector<size_type>;

        data_type data;    
        size_type rows = 0, cols = 0;

        bool IsGood() const {       
             // Some checks   
        }

        size_type &operator()(size_type row, size_type col) {        
            return data[row * cols + col];    
        }    

        size_type operator()(size_type row, size_type col) const {       
             return data[row * cols + col];    
            }
        };

        using CaveWrapper = BasicWrapper<kCave>;
    `
    const handleToggleCodeOpen = () => {
        setIsCodeOpen(prevState => !prevState);
    }   
  return (
    
    <MainContainer>
        <Header/>
        <ArticleDetailsMainContentContainer>
            <TitleAndTagsContainerStyled>
            <ArticleTitleStyled>{lastArticleText}</ArticleTitleStyled>
            <ArticleTagsStyled>{lastArticleTags}</ArticleTagsStyled>
            </TitleAndTagsContainerStyled>
            <ArticleText>Волновой алгоритм — это алгоритм поиска пути, 
                который использует волновое распространение 
            для определения кратчайшего пути от начальной вершины до целевой вершины.
            </ArticleText>
            <ArticleText>Название алгоритму дано не случайно, поведение алгоритма соответствует распространению волны, 
                волна огибает препятствия, постепенно заполняя все пространство.
            </ArticleText>
            <ArticleSubTitle>Правила волнового алгоритма</ArticleSubTitle>
            <ArticleText>Волна будет распространяться по окрестности фон Неймана

            </ArticleText>
            <ArticleText>Конечно, вместо окрестности фон Неймана, можно было использовать окрестность Мура, 
                однако в случае с лабиринтом это невозможно, остановимся на первой окрестности.
            </ArticleText>
            <ArticleText>Волна, как и в жизни, может распространиться только в ту сторону, где нет препятствия

            </ArticleText>
            <ArticleText>
                    Последней волной будет считаться та, которая достигла конечной точки, 
                    либо которая заполнила все пространство.
            </ArticleText>
            <ArticleSubTitle>Реализация алгоритма на С++</ArticleSubTitle>
            <ArticleText>
            В первую очередь нам нужно создать матрицу (массив) длин, 
            где будем хранить расстояния от клетки старта до клетки финиша
            </ArticleText>
            <ArticleText>CaveWrapper length_map;</ArticleText>
            <CodeBlockTitle onClick={(handleToggleCodeOpen)} >
                <Triangle className={isCodeOpen ? 'active' : 'disabled'}/>
                <ArticleText>Что такое CaveWrapper?</ArticleText>
            </CodeBlockTitle>
            {isCodeOpen && 
            <CodeBlock className={isCodeOpen ? "active" : "disabled"}>
                <CodeBlockText>{CodeBlockTextInput}</CodeBlockText>
            </CodeBlock>
            }
            <ArticleText>Во вторую очередь нам нужно создать массивы распространения волны. 
                Волна будет распространяться постепенно, 
                поэтому нам надо хранить текущее распространение волны
                и предыдущее распространение, 
                текущая волна будет распространяться 
                в зависимости от предыдущего распространения.
            </ArticleText>
            <ArticleText>std::vector&lt;Point&gt; wave, old_wave;</ArticleText>
            <ArticleText>Также нам нужен будет счетчик для того чтобы знать сколько раз волна распространилась</ArticleText>
            <ArticleText>size_type wave_step = 0;</ArticleText>
        </ArticleDetailsMainContentContainer>
        
    </MainContainer>
  );
};