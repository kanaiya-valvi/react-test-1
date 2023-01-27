import { useContext, useEffect, useState } from "react";
import QuestionList from "../Components/QuestionList";
import { Appcontext } from "../Store/Store";
import Card from "../UI/Card";

const Quese = () => {
  const { intialiState } = useContext(Appcontext);
  const [questions, setquestions] = useState([]);
  useEffect(() => {
    setquestions(intialiState.questions.results);
  }, [questions]);
  console.log(questions);
  return (
    <Card>
      <div>
        <QuestionList list={questions} />
        <div className="">
          <button className="">Previous</button>
          <button className="">Next</button>
        </div>
      </div>
    </Card>
  );
};

export default Quese;
