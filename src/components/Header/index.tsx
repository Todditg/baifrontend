import React from "react";
import {
  GitLink,
  HeaderCompsContainer,
  HeaderStyled,
  SideMenu,
  Title
} from "./style";
import {Link } from "react-router-dom";

export const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <HeaderCompsContainer>
        <GitLink href="https://github.com/Todditg/baifrontend">
          <img className="img" src="./assets/link_to_git.svg" alt="linktogit" />
        </GitLink>
        <Link to="/">
        <Title>
          <img className="header" src="../../assets/title.svg" alt="title"/>
        </Title>
        </Link>
        <SideMenu>
          <img className="img" src="./assets/burgmenu.svg" alt="linktogit" />
        </SideMenu>
      </HeaderCompsContainer>
    </HeaderStyled>
  );
};
