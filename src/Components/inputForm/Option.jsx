import React from "react";

function Option({ list }) {
  return list.map((item, mov) => (
    <option value={item.value} key={mov}>
      {item.text}
    </option>
  ));
}

export default Option;
