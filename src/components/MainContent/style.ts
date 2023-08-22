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
  grid-template-columns: repeat(auto-fill, minmax(28vw, 28vh));
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  align-items: center;
  padding-left: 10%;

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
  .last-article {
    background-color: #fff;
  }
`;

export const GridItemHeader = styled.div`
  color: #1d1d1d;
  font-size: 2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  max-width: 230px;
  white-space: nowrap;
  margin-bottom: 26px;
`;

export const LastArticleDescription = styled.div`
  color: #1d1d1d;
  font-size: 18px;
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
  font-size: 3.2vh;
  max-width: 347px;
  margin-top: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export const LastArticleTitle = styled.div`
  color: #1d1d1d;
  font-size: 3.2vh;
  font-style: normal;
  font-weight: 500;
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
