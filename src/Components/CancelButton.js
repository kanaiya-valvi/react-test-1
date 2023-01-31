import React, { useContext } from "react";
import { Appcontext } from "../Store/Store";

function CancelButton() {
  const { newqustion } = useContext(Appcontext);
  return (
    <button className="btn-cancel" onClick={() => newqustion()}>
      Cancel
    </button>
  );
}

export default CancelButton;
