import React from "react";


const Card = ({ data }) => {
  console.log(data);

  return (
    <div>
      <p>{data.company}</p>
      <img src={data.logo}></img>

    </div>
  );
};

export default Card;
