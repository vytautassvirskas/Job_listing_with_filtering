import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return  <header className={style.header}>
  <img className={style.header__img} src="./images/bg-header-desktop.svg" alt="" />
  </header>
};

export default Header;
