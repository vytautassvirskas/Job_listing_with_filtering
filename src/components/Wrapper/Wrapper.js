import React from "react";
import style from "./Wrapper.module.scss";

const Wrapper = ({ children }) => {
  return <main className={style.wrapper}>{children}</main>;
};

export default Wrapper;
