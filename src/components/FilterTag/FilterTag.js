import React from "react";
import Text from "../Text/Text";
import style from "./FilterTag.module.scss";

const FilterTag = ({ filter, filtersArr, setFiltersArr }) => {
  const handleDelete = (filter) => {
    if (filtersArr.includes(filter)) {
      setFiltersArr(filtersArr.filter((skill) => skill !== filter));
    }
  };
  return (
    <li className={style.filter}>
      <span className={style.filter__name}>{filter}</span>
      <button
        className={style.filter__close}
        onClick={() => handleDelete(filter)}
      >
        <img src="./images/close.svg" alt="close" />
      </button>
    </li>
  );
};

export default FilterTag;
