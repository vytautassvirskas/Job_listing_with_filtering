import React, { useState, useEffect } from "react";
import json from "./data/data.json";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import FiltersCard from "./components/FiltersCard/FiltersCard";
import Card from "./components/Card/Card";

import style from "./App.module.scss";

function App() {
  const [filtersArr, setFiltersArr] = useState([]);
  const [data, setData] = useState(json);

  useEffect(() => {
    if (filtersArr.length > 0) {
      console.log(
        "data filtravimas:",
        data.filter((position) => {
          // return position.role === "Frontend";
          return filtersArr.includes(position.role)
        })
      );

      // setData(() => {
      //   data.filter((position) => {
      //     filtersArr.includes(position.role);
      //   });
      // });
    }
  }, [filtersArr]);

  //check filtersArr
  useEffect(() => {
    console.log("filtersArr array: ", filtersArr);
  }, [filtersArr]);

  //data tikrinu
  useEffect(() => {
    console.log("data:", data);
  }, [data]);

  return (
    <div className={style.App}>
      <Header></Header>
      <Wrapper>
        {filtersArr.length === 0 ? null : (
          <FiltersCard filtersArr={filtersArr} setFiltersArr={setFiltersArr}></FiltersCard>
        )}
        {data &&
          data.map((position, i) => {
            return (
              <Card
                key={i}
                data={position}
                setFiltersArr={setFiltersArr}
                filtersArr={filtersArr}
              ></Card>
            );
          })}
      </Wrapper>
    </div>
  );
}

export default App;
