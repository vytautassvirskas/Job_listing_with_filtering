import React, { useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import FiltersCard from "./components/FiltersCard/FiltersCard";
import Card from "./components/Card/Card";

import style from "./App.module.scss";

function App() {
  console.log(data);
  return (
    <div className={style.App}>
      <Header></Header>
      <Wrapper>
        <FiltersCard></FiltersCard>
        {data &&
          data.map((person, i) => {
            return <Card key={i} data={person}></Card>;
          })}
      </Wrapper>
    </div>
  );
}

export default App;
