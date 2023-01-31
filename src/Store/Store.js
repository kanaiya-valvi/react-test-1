import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import reducer from "./reducer";

export const Appcontext = createContext();
const intialiState = {
  questions: [],
  currIndex: 0,
  currAnswer: 0,
};

const Store = ({ children }) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, intialiState);

  const getQuestion = () =>
    intialiState.questions.map((question) => ({
      question: question.question,
      correct_answer: question.correct_answer,
      incorrect_answers: question.incorrect_answers,
    }));
  const navigation = useNavigate();
  const prev = () => {
    return dispatch({
      type: "PREV",
      payload: { ...state, currIndex: (intialiState.currIndex -= 1) },
    });
  };
  const next = () => {
    return dispatch({
      type: "NEXT",
      payload: { ...state, currIndex: (intialiState.currIndex += 1) },
    });
  };
  const currectAns = () => {
    return dispatch({
      type: "CURRECT_ANS",
      payload: { ...state, currIndex: (intialiState.currAnswer += 1) },
    });
  };
  const restart = () => {
    const newQuestion = getQuestion();
    navigation("/quese");
    return dispatch({
      type: "RESTART",
      payload: {
        ...state,
        currIndex: (intialiState.currIndex = 0),
        questions: (intialiState.questions = newQuestion),
        currAnswer: (intialiState.currAnswer = 0),
      },
    });
  };
  const newqustion = () => {
    navigation("/");
    return dispatch({
      type: "NEWQUESTION",
      payload: {
        ...state,
        value: (intialiState.currIndex = 0),
        currAnswer: (intialiState.currAnswer = 0),
      },
    });
  };

  const startHandler = async (amount = 10, category, difficulty, type) => {
    // const amo = amount !== 10 ? amount : 10;
    // const cat = category === "" ? "" : "&category=" + category;
    // const def = difficulty === "" ? "" : "&difficulty=" + difficulty;
    // const typ = type === "" ? "" : "&type=" + type;

    // const url = `https://opentdb.com/api.php?amount=${amo}${cat}${def}${typ}`;

    let BASE_URL = `https://opentdb.com/api.php?amount=${amount ? amount : 10}`;

    // if (amount) BASE_URL = `${BASE_URL}amount=${amount}`;
    if (category) BASE_URL = `${BASE_URL}&category=${category}`;
    if (difficulty) BASE_URL = `${BASE_URL}&dificulty=${difficulty}`;
    if (type) BASE_URL = `${BASE_URL}&type=${type}`;

    // console.log(BASE_URL);

    const result = await fetch(BASE_URL);
    const data = await result.json();

    setData(data);
    intialiState.questions = data.results;
    intialiState.userTrach = intialiState.questions.slice();
  };

  return (
    <Appcontext.Provider
      value={{
        intialiState,
        startHandler,
        data,
        prev,
        next,
        restart,
        newqustion,
        currectAns,
      }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Store;
