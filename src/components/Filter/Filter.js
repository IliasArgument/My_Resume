import React from "react";
import "./Filter.css";

const Filter = ({ filtres }) => {
  return (
    <>
      <div className="Cards_cards">
        {filtres.map((items) => (
          <div className="Card" key={items.id + items.links + items.text}>
            <img className="Image_card" src={items.img} alt={items.text}></img>
            <h3 className="Card_head_up">{items.title}</h3>
            <p className="Card_head">{items.desc}</p>
            <div className="Card_link">
              <a href={items.code}>
                <button className="Card_git code">Code</button>
              </a>
              <a href={items.links}>
                <button className="Card_git link">Link to </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
