import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="box">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
      </div>
    </div>
  );
}

export default Loader;
