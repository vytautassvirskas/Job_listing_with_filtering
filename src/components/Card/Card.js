import React from "react";
import Text from "../Text/Text";

import style from "./Card.module.scss";

const Card = ({ data }) => {
  // console.log(data);

  return (
    <div className={!data.featured ? style.card : style[`card--featured`]}>
      {/* left card part */}
      <div className={style.card__company}>
        <img className={style.card__logo} src={data.logo} alt="logo"></img>
        <div className={style.card__info}>
          <p>
            <Text className="text--company">{data.company}</Text>
            {data.new && <Text className="text--new">{"new"}</Text>}
            {data.featured && (
              <Text className="text--featured">{"featured"}</Text>
            )}
          </p>
          <Text className="text--position">{data.position}</Text>
          <p>
            <Text className="text--details">{data.postedAt}</Text>
            <Text className="text--details">&middot;</Text>
            <Text className="text--details">{data.contract}</Text>
            <Text className="text--details">&middot;</Text>
            <Text className="text--details">{data.location}</Text>
          </p>
        </div>
      </div>
      {/* rigth card part */}
      <div className={style.card__skills}>
        <Text className="text--filter">{data.role}</Text>
        <Text className="text--filter">{data.level}</Text>

        {/* language array map */}
        {data.languages.length > 0 &&
          data.languages.map((skill, i) => {
            console.log("language mapina");
            return (
              <Text key={i} className="text--filter">
                {skill}
              </Text>
            );
          })}

        {/* tools array map */}
        {data.tools.length > 0 &&
          data.tools.map((skill, i) => {
            console.log("tools mapina");
            return (
              <Text key={i} className="text--filter">
                {skill}
              </Text>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
