import React from "react";
import Card from "./Card/Card";
import FetchData from "../../services/FetchData";
import "./cardList.css";

const CardList = () => {
  const { data: cards, isPending, error } = FetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <ul className="crad-list">
        {cards &&
          cards.map((card) => (
            <li key={card.id}>
              <Card userid={card.userId} id={card.id} title={card.title} />
            </li>
          ))}
      </ul>
    </>
  );
};
export default CardList;
