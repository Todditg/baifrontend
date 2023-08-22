import React from "react";
import {
  GitLink,
  HeaderCompsContainer,
  HeaderStyled,
  SideMenu,
  Title
} from "./style";

export const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <HeaderCompsContainer>
        <GitLink href="https://github.com/Todditg/baifrontend">
          <img className="img" src="./assets/link_to_git.svg" alt="linktogit" />
        </GitLink>
        <Title>
          <img className="header1" src="../../assets/title.svg" alt="title"/>
        </Title>
        <SideMenu>
          <img className="img" src="./assets/burgmenu.svg" alt="linktogit" />
        </SideMenu>
      </HeaderCompsContainer>
    </HeaderStyled>
  );
};
