import React from "react";

import * as S from "./styles";

export const NavBar = () => {
    return (
      <S.Parent>
        <S.MenuItem to="/">Home</S.MenuItem>
        <S.MenuItem to="/about me">About Me</S.MenuItem>
        <S.MenuItem to="/services">Services</S.MenuItem>
        <S.MenuItem to="/tools">Tools</S.MenuItem>
        <S.MenuItem to="/portfolio">Portfolio</S.MenuItem>
        <S.MenuItem to="/pages">Pages</S.MenuItem>
        
        <S.MenuItemContact to="/contact me">Contact Me</S.MenuItemContact>
      </S.Parent>
    );
};


