import React from "react";
import "./feedback.css";

const StoreScale = (props) => {
  const businessType = [
    {
      text: "Small",
      handler: props.actionProvider.pickSmallScale,
      id: 1,
    },
    {
      text: "Medium or Large",
      handler: props.actionProvider.pickMedLarScale,
      id: 2,
    },
  ];
  const buttonMarkup = businessType.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonMarkup}</div>;
};

export default StoreScale;
