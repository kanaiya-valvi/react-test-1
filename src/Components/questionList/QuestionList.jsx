import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Appcontext } from "../../Store/Store";
import Loader from "../../UI/Loader";
import style from "./QuestionList.module.scss";

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
        <h1 className={style.error}>
          Something is wrong!!! Click to Cancel Button.
        </h1>
      )}
      {loading && <Loader />}
      {!loading && curQuestion && curQuestion?.length !== 0 && (
        <div className={style.questionList}>
          <h3>
            {currindex + 1} ){" "}
            <span
              dangerouslySetInnerHTML={{ __html: curQuestion.question }}></span>
          </h3>
          <div className={style.questionList__options}>
            {[...curQuestion?.incorrect_answers, curQuestion?.correct_answer]
              .sort()
              .map((res, val) => (
                <button
                  className={
                    curQuestion.selected &&
                    curQuestion?.user_answer !== curQuestion?.correct_answer &&
                    curQuestion?.user_answer === res
                      ? `${style.option} ${style.wrong}`
                      : `${style.option}` &&
                        curQuestion?.selected &&
                        curQuestion?.user_answer ===
                          curQuestion?.correct_answer &&
                        curQuestion?.user_answer === res
                      ? `${style.option} ${style.correct}`
                      : `${style.option}`
                  }
                  key={currindex + val.toString()}
                  onClick={ansHandler}
                  value={res}>
                  {val + 1} ). {res}
                </button>
              ))}
          </div>
          {check && (
            <div className={style.right_and}>
              <p>{curQuestion?.correct_answer}</p>
            </div>
          )}
        </div>
      )}
      <div className={style.actions}>
        {!loading && (
          <button className={style.btn} onClick={prev}>
            Previous
          </button>
        )}

        {currindex < sortState?.length - 1 && (
          <button className={style.btn} onClick={next}>
            Next
          </button>
        )}
        {currindex === sortState?.length - 1 && (
          <button className={style.btn} onClick={() => navigat("/result")}>
            Result
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionList;
