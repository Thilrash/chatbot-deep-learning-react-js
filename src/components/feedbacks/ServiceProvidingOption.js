import React from "react";
import "./feedback.css";

const ServiceProvidingOption = (props) => {
  const businessType = [
    {
      text: "On Time",
      handler: props.actionProvider.pickOnTime,
      id: 1,
    },
    {
      text: "Scheduled Time",
      handler: props.actionProvider.pickOnScheduledTime,
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

export default ServiceProvidingOption;
