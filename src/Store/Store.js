import React, { createContext, useReducer, useState } from "react";
import reducer from "./reducer";

export const Appcontext = createContext();

const intialiState = {
  questions: [],
  currIndex: 0,
};

const Store = ({ children }) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, intialiState);
  const prev = () => {
    return dispatch({
      type: "PREV",
      payload: { value: (intialiState.currIndex -= 1) },
    });
  };
  const next = () => {
    return dispatch({
      type: "NEXT",
      payload: { value: (intialiState.currIndex += 1) },
    });
  };

  const startHandler = async (amount, category, difficulty, type) => {
    const url = `https://opentdb.com/api.php?amount=${
      amount !== 10 ? amount : "10"
    }${category !== "" ? `&category=${category}` : ""}${
      difficulty !== "" ? `&difficulty=${difficulty}` : ""
    }${type !== "" ? `&type=${type}` : ""}`;

    const result = await fetch(url);
    const data = await result.json();

    setData(data);
    intialiState.questions = data;
  };

  return (
    <Appcontext.Provider
      value={{ intialiState, startHandler, data, prev, next }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Store;
