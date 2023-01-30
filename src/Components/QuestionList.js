import "./QuestionList.scss";

import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Store/Store";
const QuestionList = () => {
  const { intialiState, prev, next } = useContext(Appcontext);
  const [curQuestion, setCurQuestion] = useState([]);

  useEffect(() => {
    setCurQuestion(intialiState?.questions.results[intialiState.currIndex]);
  }, [intialiState.questions.results, intialiState.currIndex, curQuestion]);
  const currindex = intialiState.currIndex;

  return (
    <>
      {curQuestion && curQuestion?.length !== 0 && (
        <div className="questionList">
          <h3>
            {currindex + 1} ) {curQuestion.question}
          </h3>
          <ul className="questionList__options">
            {[...curQuestion?.incorrect_answers, curQuestion?.correct_answer]
              .sort()
              .map((res, val) => (
                <li key={val}>
                  {val + 1} ). {res}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="actions">
        {currindex !== 0 && (
          <button className="btn" onClick={prev}>
            Previous
          </button>
        )}
        {currindex < intialiState?.questions?.results?.length - 1 && (
          <button className="btn" onClick={next}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionList;
