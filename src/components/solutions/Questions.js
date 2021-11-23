import React, { useState } from "react";

import SolutionCard from "./SolutionCard";

const Questions = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

  const currentQuestion = props.questions[questionIndex];

  if (!currentQuestion) {
    return <p>Tips Over</p>;
  }

  return (
    <SolutionCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};

export default Questions;
