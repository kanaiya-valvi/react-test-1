import React, { createContext, useState } from "react";

export const Appcontext = createContext();

const intialiState = {
  questions: [],
};

const Store = ({ children }) => {
  const [data, setData] = useState([]);

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
    <Appcontext.Provider value={{ intialiState, startHandler, data }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Store;
