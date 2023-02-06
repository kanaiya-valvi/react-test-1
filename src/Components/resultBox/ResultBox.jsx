import React, { useContext } from "react";
import { Appcontext } from "../../Store/Store";
import style from "./ResultBox.module.scss";

function ResultBox() {
  const { intialiState, restart, newqustion } = useContext(Appcontext);
  if (intialiState?.questions?.length === 0) {
    newqustion();
  }
  return (
    <>
      <div className={style.result}>
        <h1>
          {intialiState.currAnswer}/{intialiState?.questions?.length}
        </h1>
        <div className={style.result__btn}>
          <button className={style["result__btn--restart"]} onClick={restart}>
            Restart
          </button>
          <button className={style["result__btn--new"]} onClick={newqustion}>
            New Questions
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultBox;
