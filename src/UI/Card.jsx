import React from "react";
import "./card.scss";

function Card({ children }) {
  return <section className="card">{children}</section>;
}

export default Card;
