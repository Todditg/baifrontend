import { styled } from "styled-components";
import * as colorette from "colorette";

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #373737;
  height: 100%;
`;

export const GridContainer = styled.div`
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-items: center;
  grid-auto-flow: row;
  

  .idea-item {
    background-color: #7effd4;
    
  }
  .future-content-soon {
    display: flex;
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: #7effd4;
    height: 100%;
    align-items: center;
    font-size: 4vh;
  }
  .last-article, .popular-tags {
    background-color: #fff;
  }

  .our-mission {
    border: 2px solid #7EFFD4;
  }

  .idea-item-text {
    padding-top: 72px;;
  }

  .our-mission > div {
    color: #fff;
  }

  .read-button {
    grid-column: span 3;
  }

`;

export const GridItemHeader = styled.div`
  color: #1d1d1d;
  font-size: 2vw;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-transform: uppercase;
  max-width: 230px;
  white-space: nowrap;
  margin-bottom: 26px;
`;

export const LastArticleDescription = styled.div`
  color: #1d1d1d;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

export const LastArticleTags = styled(LastArticleDescription) ``

export const MainTitle = styled.div`
  color: #fff;
  font-size: 7vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 34px;
  margin-bottom: 0.5em;
`;

export const ArticleButton = styled.button`
  max-width: 345px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #1d1d1d;
  font-size: 1.2vw;
  font-weight: 500;
  line-height: normal;
  background-color: #fff;
  padding: 5px 90px;
  margin-top: 12px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #373737;
    color: #fff;
    transition: 0.3s;
  }
`;

export const TextContent = styled.div`
  color: #1d1d1d;
  font-size: 18px;
  max-width: 347px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;  
  text-transform: capitalize;
`;

export const LastArticleTitle = styled.div`
  color: #1d1d1d; 
  font-size: 3.2vh;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  margin-bottom: 25px;
  
`;
export const GridItem = styled.div`
  padding: 22px 39px;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  border-radius: 24px;
  box-sizing: border-box; 
`;

export const ReadButton = styled(ArticleButton)`
  background-color: transparent;
  border: 1px solid #7EFFD4;
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  height: 50px;
  margin-bottom: 56px;
  border-radius: 26px;
  &:hover {
    background-color: #7EFFD4;
    
  }
`;
