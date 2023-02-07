import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Appcontext } from "../../Store/Store";
import Loader from "../../UI/Loader";
import styles from "./InputForm.module.scss";
import Option from "./Option";

function Form() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const [numOfQue, setNumOfQue] = useState();
  const [cat, setCat] = useState();
  const [type, setType] = useState();
  const [difficulty, setDifficulty] = useState();

  const postCtx = useContext(Appcontext);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchCat = async () => {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategory(data);
      console.log("setCategory");
      setLoading(false);
    };
    fetchCat(category);
  }, [setLoading]);

  const submitHandler = (event) => {
    event.preventDefault();
    postCtx.startHandler(numOfQue, cat, difficulty, type);
    setTimeout(() => {
      navigate("./quese");
    }, 1000);
  };
  const amountOfQuese = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  const difficultyList = [
    { text: "Any Difficulty", value: "" },
    { text: "Easy", vlaue: "easy" },
    { text: "Medium", value: "medium" },
    { text: "Hard", value: "hard" },
  ];
  const typeList = [
    { text: "Any Any", value: "" },
    { text: "Multiple", value: "multiple" },
    { text: "true/false", value: "boolean" },
  ];

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form onSubmit={submitHandler} className={styles.formConteiner}>
          <h2>Select</h2>
          {/* number of Question */}
          <div>
            <p>
              <label htmlFor="NumberOfQuestions">Number of Questions</label>
            </p>
            <select
              onChange={(event) => {
                setNumOfQue(event.target.value);
              }}>
              {amountOfQuese.map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          {/* Category */}
          <div>
            <p>
              <label htmlFor="category">Select Category:</label>
            </p>
            <select id="category" onChange={(e) => setCat(e.target.value)}>
              <option value="">Any category</option>
              {category.trivia_categories?.map((list, move) => (
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
            <select
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}>
              <Option list={difficultyList} />
            </select>
          </div>
          {/* type */}
          <div>
            <p>
              <label htmlFor="type">Select Type:</label>
            </p>
            <select id="type" onChange={(e) => setType(e.target.value)}>
              <Option list={typeList} />
            </select>
          </div>
          <button>Submit</button>
        </form>
      )}
    </>
  );
}

export default Form;
