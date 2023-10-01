import { styled } from "styled-components"; 


export const ArticleBriefBlockStyled = styled.div`
    display: flex;
    width: 95%;
    height: 182px;
    background: linear-gradient(to bottom right, rgba(202, 248, 19, 0.01) 0%, rgba(202, 248, 19, 0.01) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(202, 248, 19, 0.01) 0%, rgba(202, 248, 19, 0.01) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(202, 248, 19, 0.01) 0%, rgba(202, 248, 19, 0.01) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(202, 248, 19, 0.01) 0%, rgba(202, 248, 19, 0.01) 50%) top right / 50% 50% no-repeat;
    backdrop-filter: blur(20px);
    border-radius: 26px;
    color: #fff;
    border: 1px solid #FFF;
    margin-bottom: 50px;
    &:hover {
        border: 1px solid #7effd4;
    }
    align-items: center;
    justify-content: space-around;
    padding: 0 5%;
    gap: 10%;
    &::after {
        content: url('../../assets/looper.png');
        position: absolute;
        z-index: -4;
        filter: blur(20px);
        left: 50%;
        max-height: 150px;
        
    }
`

export const TitleAndTagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    height: 80%;
    align-items: center;
    justify-content: space-around;

`

export const ArticleTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
`

export const ArticleTags = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

export const ArticleDescription = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 33%;

`

export const ArticleBriefButton = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid #7effd4;
    &::after {
        content: url('../../assets/article_brief_button.svg');
        position: relative;
        top: 5%;
    }

    &:hover {
        box-shadow: inset 0px 2px 4px rgba(0,255,255,0.3), 
              inset 0px 4px 8px rgba(0,255,255,0.3), 
              inset 0px 8px 16px rgba(0,255,255,0.3);
        transition: 0.2s;
        transform: translateY(2px);
    }
`