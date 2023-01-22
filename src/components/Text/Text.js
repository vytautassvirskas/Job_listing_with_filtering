import React from "react";
import style from "./Text.module.scss";

const Text = (props) => {
  return (
    <>
      {!props.btn ? (
        <span className={style[`${props.className}`]} onClick={props.onClick}>
          {props.children}
        </span>
      ) : (
        <button className={style[`${props.className}`]} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Text;
