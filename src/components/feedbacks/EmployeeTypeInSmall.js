import React from "react";
import "./feedback.css";

const EmployeeTypeInSmall = (props) => {
  const businessType = [
    {
      text: "🌛 Part Time",
      handler: props.actionProvider.pickSmallPartTime,
      id: 1,
    },
    {
      text: "🌝 Full Time",
      handler: props.actionProvider.pickSmallFullTime,
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

export default EmployeeTypeInSmall;
