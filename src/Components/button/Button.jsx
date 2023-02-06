import React, { useContext } from "react";
import { Appcontext } from "../../Store/Store";

function Button({ content, classes }) {
  const { newqustion } = useContext(Appcontext);
  return (
    <button className={classes} onClick={() => newqustion()}>
      {content}
    </button>
  );
}

export default Button;
