import {styled } from "styled-components";
import { MainContentContainer } from "../../components/MainContent/style";
import { TitleAndTagsContainer, ArticleTitle, ArticleTags } from "../../components/ArticleBrief/styled";

export const ArticleDetailsMainContentContainer = styled(MainContentContainer)`
    width: 100%;
    align-items: start;
    padding: 35px 5%;
    color: #ffffff;
`

export const TitleAndTagsContainerStyled = styled(TitleAndTagsContainer)`
    align-items: start;
    margin-bottom: 40px;

`

export const ArticleTitleStyled = styled(ArticleTitle)`
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`

export const ArticleTagsStyled = styled(ArticleTags)`
    font-size: 24px;
`

export const ArticleText = styled.p`
    align-self: center;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding: 0 3vw;
    margin-bottom: 20px;
    width: 80%;
`

export const ArticleSubTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin: 40px 0;
`

export const CodeBlockTitle = styled(ArticleText)`
    cursor: pointer;
    display: flex;
    &>p {
        padding: 0 5px;
    }
`
export const Triangle = styled.div`
    width: 0; 
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #7effd4;
    border-bottom: 10px solid transparent;
    &.active {
        transform: rotate(90deg);
        transition: 0.5s;
    }
    &.disabled {
        transform: rotate(0deg);
        transition: 0.5s;
    }
`
export const CodeBlock = styled.div`
    background-color: black;
    border-radius: 26px;
    border: 1px solid #7effd4;
    background: #1D1D1D;
    width: 60%;
    align-self: center;
    margin-bottom: 30px;
    @keyframes openModal {
    0% { transform: translateY(-20%); }
    100% { transform: translateY(0);   }
}

@keyframes closeModal {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20%);}
}

    &.active {
        animation: openModal 0.4s ease-out forwards;    
    }

    &.disabled {
        animation: closeModal 0.4s ease-out forwards;
    }

`

export const CodeBlockText = styled.pre`
    color: #7effd4;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
`