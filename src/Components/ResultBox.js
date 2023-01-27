import React from "react";
import "./ResultBox.scss";

function ResultBox() {
  return (
    <div className="result">
      <h1>8/10</h1>
      <div className="result__btn">
        <button className="result__btn--restart">Restart</button>
        <button className="result__btn--new">New Questions</button>
      </div>
    </div>
  );
}

export default ResultBox;
