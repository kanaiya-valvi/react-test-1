import React, { useContext } from "react";
import { Appcontext } from "../Store/Store";

function CancelButton({ content }) {
  const { newqustion } = useContext(Appcontext);
  return (
    <button className="btn-cancel" onClick={() => newqustion()}>
      {content}
    </button>
  );
}

export default CancelButton;
