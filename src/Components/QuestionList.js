import "./QuestionList.scss";
import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Store/Store";
import { useNavigate } from "react-router";
import Loader from "../UI/Loader";
const QuestionList = () => {
  const { intialiState, prev, next, currectAns } = useContext(Appcontext);
  const [curQuestion, setCurQuestion] = useState("");
  const [check, setCheck] = useState(false);
  const navigat = useNavigate();
  const sortState = intialiState.questions;
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    setCurQuestion(sortState[intialiState.currIndex]);
    curQuestion?.selected &&
    curQuestion?.user_answer !== curQuestion?.correct_answer
      ? setCheck(true)
      : setCheck(false);
    if (!curQuestion) {
      isLoading(true);
    } else {
      isLoading(false);
    }
  }, [loading, intialiState.currIndex, curQuestion, sortState]);
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
    }
  };

  return (
    <>
      {loading && (
        <h1 className="error">Something is wrong!!! Click to Cancel Button.</h1>
      )}
      {loading && <Loader />}
      {/* {curQuestion && curQuestion?.length !== 0 && ( */}
      {!loading && curQuestion && curQuestion?.length !== 0 && (
        <div className="questionList">
          <h3>
            {currindex + 1} ){" "}
            <span
              dangerouslySetInnerHTML={{ __html: curQuestion.question }}></span>
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
        {!loading && (
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
