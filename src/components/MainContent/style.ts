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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  align-items: center;

  .idea-item {
    background-color: #7effd4;
  }
  .future-content-soon {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .last-article {
    background-color: #fff;
  }
`;

export const GridItemHeader = styled.div`
  color: #1d1d1d;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  max-width: 230px;
`;

export const LastArcDescription = styled.div`
  color: #1d1d1d;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MainTitle = styled.div`
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 34px;
`;

export const ArticleButton = styled.button`
  max-width: 345px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #1d1d1d;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  background-color: #fff;
  padding: 5px 90px;
  margin-top: 126px;
  white-space: nowrap;
`;

export const TextContent = styled.div`
  color: #1d1d1d;
  font-size: 24px;
  max-width: 347px;
  margin-top: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export const LastArticleTitle = styled.div`
  color: #1d1d1d;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const GridItem = styled.div`
  padding: 22px 39px;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  border-radius: 24px;
`;
