import React from "react";
import "./QuoteContainer.css";

function QuoteContainer({ quotes, getQuotes }) {
  return (
    <div className="quote-container">
      <div className="quote-tag">
        <span>#{quotes?.tag}</span>
      </div>
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span>{quotes?.text}</span>
        <i className="fas fa-quote-right"></i>
      </div>
      <div className="quote-author">
        <span>{quotes?.author || "Unknown"}</span>
      </div>
      <div className="button-container">
        <button className="button" onClick={getQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteContainer;
