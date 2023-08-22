import { styled } from "styled-components"; 

export const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1.5px solid #7effd4;
`;

export const HeaderCompsContainer = styled.div`
  display: flex;
  gap: 509px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GitLink = styled.a`
  width: 40px;
  height: 40px;
  z-index: 9999;
  display: inline-block;
`;

export const SideMenu = styled.button`
  content: url(/src/assets/burgmenu.svg);
  background-color: #373737;
  border: none;
  cursor: pointer;
`;

export const Title = styled.div`
  padding-top: 10px;
  cursor: pointer;
`
