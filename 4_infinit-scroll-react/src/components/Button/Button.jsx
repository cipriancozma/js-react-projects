import React from "react";
import "./styles.css";

function Button({ text, handlerFunction, isVisible }) {
  return (
    <div className="btn-container">
      {isVisible && (
        <button className="btn" onClick={handlerFunction}>
          {text}
        </button>
      )}
    </div>
  );
}

export default Button;
