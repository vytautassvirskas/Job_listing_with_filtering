import React from "react";
import style from "./FiltersCard.module.scss";

const FiltersCard = () => {
  return (
    <div className={style.filtering}>
      <div className={style.filtering__filters}></div>
      <button className={style.filtering__clear}>Clear</button>
    </div>
  );
};

export default FiltersCard;
