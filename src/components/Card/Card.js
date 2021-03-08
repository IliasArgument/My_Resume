import React, { useState, useEffect } from "react";
import "./Card.css";
import Filter from "../Filter/Filter";
import { useCardState } from "../App/hooks";

const Cards = () => {
  const { state, setState } = useCardState();
  const [value, setValue] = useState([]);

  useEffect(() => {
    setState(state);
    setValue(state.item);
  }, [setState, state, state.item]);

  const onSort = (name) => {
    const newArr = [...state.item.filter((i) => i.id === name)];
    setValue(newArr);
    if (name === "all") {
      const newState = [...state.item];
      setValue(newState);
    }
  };

  return (
    <>
      <div>
        <div className="Cards" id="cards">
          <h2>My Project</h2>
          <div className="Sort_card">
            <p onClick={() => onSort("all")}>All</p>
            <p onClick={() => onSort("react")}>React.js</p>
            <p onClick={() => onSort("redux")}>React/Redux</p>
            <p onClick={() => onSort("vue")}>Vue.js</p>
          </div>
          <Filter filtres={value} />
        </div>
      </div>
    </>
  );
};
export default Cards;
