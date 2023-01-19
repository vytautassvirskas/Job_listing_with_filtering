import React from "react";
import style from "./Text.module.scss";

const Text = (props) => {
  return (
    <span className={style[`${props.className}`]} onClick={props.onClick}>
      {props.children}
    </span>
  );
};

export default Text;
