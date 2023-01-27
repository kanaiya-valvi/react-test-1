import React from "react";
import "./QuestionList.scss";
const QuestionList = ({ list }) => {
  return (
    <ul className="questionList">
      {list?.map((datalist, move) => (
        <div key={move}>
          <h3>
            {move + 1} ) {datalist.question}
          </h3>
          <ul className="questionList__options">
            {datalist.incorrect_answers.map((res, val) => (
              <li key={val * 1.2}>
                {val + 1} ). {res}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
};

export default QuestionList;
