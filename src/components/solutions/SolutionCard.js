import React, { useState, useEffect } from "react";
import "./questions.css";

const SolutionCard = ({ question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div
        className="solutionCard-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
      {showAnswer && (
        <button onClick={incrementIndex} className="solutionCard-button">
          Next Tip
        </button>
      )}
    </>
  );
};

export default SolutionCard;
