import React from "react";
import FiltersCard from "../FiltersCard/FiltersCard";
import Text from "../Text/Text";

import style from "./Card.module.scss";

const Card = ({ data, filtersArr, setFiltersArr }) => {
  const handleAdd = (skill) => {
    if (!filtersArr.includes(skill)) {
      setFiltersArr((prevValue) => {
        return [...prevValue, skill];
      });
    }
  };

  return (
    <div className={!data.featured ? style.card : style[`card--featured`]}>
      {/* left side of the card */}
      <div className={style.card__company}>
        <img className={style.card__logo} src={data.logo} alt="logo"></img>
        <div className={style.card__info}>
          <div>
            <Text className="text--company">{data.company}</Text>
            {data.new && <Text className="text--new">{"new"}</Text>}
            {data.featured && (
              <Text className="text--featured">{"featured"}</Text>
            )}
          </div>
          <Text className="text--position">{data.position}</Text>
          <div>
            <Text className="text--details">{data.postedAt}</Text>
            <Text className="text--details">&middot;</Text>
            <Text className="text--details">{data.contract}</Text>
            <Text className="text--details">&middot;</Text>
            <Text className="text--details">{data.location}</Text>
          </div>
        </div>
      </div>
      {/* right side of the card */}
      <div className={style.card__skills}>
        <Text
          className="text--filter"
          onClick={() => handleAdd(data.role)}
          btn={true}
        >
          {data.role}
        </Text>
        <Text
          className="text--filter"
          onClick={() => handleAdd(data.level)}
          btn={true}
        >
          {data.level}
        </Text>

        {/* language array map */}
        {data.languages.length === 0
          ? null
          : data.languages.map((skill, i) => {
              return (
                <Text
                  key={i}
                  className="text--filter"
                  onClick={() => handleAdd(skill)}
                  btn={true}
                >
                  {skill}
                </Text>
              );
            })}

        {/* tools array map */}
        {data.tools.length === 0
          ? null
          : data.tools.map((skill, i) => {
              return (
                <Text
                  key={i}
                  className="text--filter"
                  onClick={() => handleAdd(skill)}
                  btn={true}
                >
                  {skill}
                </Text>
              );
            })}
      </div>
    </div>
  );
};

export default Card;
