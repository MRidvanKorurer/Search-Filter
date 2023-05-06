import React from "react";

const Card = ({ search, Data }) => {
  return (
    <div className="dataContainer">
      {Data.filter((item) => {
        if (search == "") {
          return item;
        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      }).map((item) => {
        return (
          <div className="data" key={item.id}>
            <img src={item.image} />
            <h2>{item.title}</h2>
            <p>{item.Descriptions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
