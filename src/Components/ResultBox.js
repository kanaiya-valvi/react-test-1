import "./ResultBox.scss";

import { useContext } from "react";
import { Appcontext } from "../Store/Store";

function ResultBox() {
  const { intialiState, restart, newqustion } = useContext(Appcontext);

  return (
    <div className="result">
      <h1>
        {intialiState.currAnswer}/{intialiState?.questions?.length}
      </h1>
      <div className="result__btn">
        <button className="result__btn--restart" onClick={restart}>
          Restart
        </button>
        <button className="result__btn--new" onClick={newqustion}>
          New Questions
        </button>
      </div>
    </div>
  );
}

export default ResultBox;
