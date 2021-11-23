import React from "react";
import "./businessType.css";

const BusinessType = (props) => {
  const businessType = [
    {
      text: "Goods Related Business",
      handler: props.actionProvider.goodsBusiness,
      id: 1,
    },
    {
      text: "Service Related Business",
      handler: props.actionProvider.serviceBusiness,
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

export default BusinessType;
