import React from "react";
import FilterTag from "../FilterTag/FilterTag";
import style from "./FiltersCard.module.scss";

const FiltersCard = ({ filtersArr, setFiltersArr }) => {
  return (
    <div className={style["filters-card"]}>
      {filtersArr.length === 0 ? null : (
        <ul className={style["filters-card__list"]}>
          {filtersArr.map((filter, i) => {
            return (
              <FilterTag
                key={i}
                filter={filter}
                filtersArr={filtersArr}
                setFiltersArr={setFiltersArr}
              ></FilterTag>
            );
          })}
        </ul>
      )}
      <button
        className={style["filters-card__clear"]}
        onClick={() => setFiltersArr([])}
      >
        Clear
      </button>
    </div>
  );
};

export default FiltersCard;
