import "./QuestionList.scss";

import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Store/Store";
import { useNavigate } from "react-router";
const QuestionList = () => {
  const { intialiState, prev, next, currectAns } = useContext(Appcontext);
  const [curQuestion, setCurQuestion] = useState([]);
  const [check, setCheck] = useState(false);
  const navigat = useNavigate();
  const sortState = intialiState.questions;


  useEffect(() => {
    setCurQuestion(sortState[intialiState.currIndex]);

    curQuestion.selected &&
    curQuestion?.user_answer !== curQuestion?.correct_answer
      ? setCheck(true)
      : setCheck(false);
  }, [
    check,
    sortState,
    intialiState.currIndex,
    curQuestion,
    curQuestion.user_answer,
  ]);
  const currindex = intialiState.currIndex;
  const ansHandler = (event) => {
    if (!curQuestion.selected) {
      const currvalue = event.target.value;
      const currAnswer = curQuestion.correct_answer;

      curQuestion.user_answer = currvalue;
      curQuestion.selected = true;

      if (currvalue === currAnswer) {
        event.target.classList.add("correct");
        currectAns();
        setCheck(false);
      } else {
        event.target.classList.add("wrong");
        setCheck(true);
      }
    } else {
      alert("Question selected");
    }
  };

  return (
    <>
      {curQuestion && curQuestion?.length !== 0 && (
        <div className="questionList">
          <h3>
            {currindex + 1} ) {curQuestion.question}
          </h3>
          <div className="questionList__options">
            {[...curQuestion?.incorrect_answers, curQuestion?.correct_answer]
              .sort()
              .map((res, val) => (
                <button
                  className={
                    curQuestion.selected &&
                    curQuestion?.user_answer !== curQuestion?.correct_answer &&
                    curQuestion?.user_answer === res
                      ? "option wrong"
                      : "option" &&
                        curQuestion?.selected &&
                        curQuestion?.user_answer ===
                          curQuestion?.correct_answer &&
                        curQuestion?.user_answer === res
                      ? "option correct"
                      : "option"
                  }
                  key={currindex + val.toString()}
                  onClick={ansHandler}
                  value={res}>
                  {val + 1} ). {res}
                </button>
              ))}
          </div>
          {check && (
            <div className="right_and">
              <p>{curQuestion?.correct_answer}</p>
            </div>
          )}
        </div>
      )}
      <div className="actions">
        {currindex !== 0 && (
          <button className="btn" onClick={prev}>
            Previous
          </button>
        )}
        {currindex < sortState?.length - 1 && (
          <button className="btn" onClick={next}>
            Next
          </button>
        )}
        {currindex === sortState?.length - 1 && (
          <button className="btn" onClick={() => navigat("/result")}>
            Result
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionList;
