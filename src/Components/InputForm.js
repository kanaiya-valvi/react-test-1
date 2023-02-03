import "./InputForm.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { Appcontext } from "../Store/Store";
import { useNavigate } from "react-router";

import Loader from "../UI/Loader";

function Form() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const numOfQue = useRef();
  const cat = useRef();
  const type = useRef();
  const difficulty = useRef();

  const postCtx = useContext(Appcontext);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchCat = async () => {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategory(data);
      setLoading(false);
    };
    fetchCat(category);
  }, [setLoading]);

  const submitHandler = (event) => {
    event.preventDefault();
    postCtx.startHandler(
      numOfQue.current.value,
      cat.current.value,
      difficulty.current.value,
      type.current.value
    );
    setTimeout(() => {
      navigate("./quese");
    }, 1000);
  };

  const amountOfQuese = [10, 15, 20, 25, 30, 35, 40, 45, 50];

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form onSubmit={submitHandler} className="formConteiner">
          <h2>Select</h2>
          {/* number of Question */}
          <div>
            <p>
              <label htmlFor="NumberOfQuestions">Number of Questions</label>
            </p>
            <select ref={numOfQue}>
              {amountOfQuese.map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            {/* <input type="number" defaultValue="10" max="50" min="10" /> */}
          </div>
          {/* Category */}
          <div>
            <p>
              <label htmlFor="category">Select Category:</label>
            </p>
            <select id="category" ref={cat}>
              <option value="">Any category</option>
              {category?.trivia_categories?.map((list, move) => (
                <option value={list.id} key={move}>
                  {list.name}
                </option>
              ))}
            </select>
          </div>
          {/* Deficaolty */}
          <div>
            <p>
              <label htmlFor="difficulty">Select Difficulty:</label>
            </p>
            <select id="difficulty" ref={difficulty}>
              <option value="">Any Difficulty</option>
              <option value="easys">Easy</option>
              <option value="medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {/* type */}
          <div>
            <p>
              <label htmlFor="type">Select Type:</label>
            </p>
            <select id="type" ref={type}>
              <option value="">Any Type</option>
              <option value="multiple">multiple</option>
              <option value="boolean">true/false</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      )}
    </>
  );
}

export default Form;
