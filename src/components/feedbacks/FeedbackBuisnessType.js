import React from "react";
import "./feedback.css";

const FeedbackBusinessType = (props) => {
  const businessType = [
    {
      text: "Goods Related Business",
      handler: props.actionProvider.pickGoodsBusiness,
      id: 1,
    },
    {
      text: "Service Related Business",
      handler: props.actionProvider.picksServiceBusiness,
      id: 2,
    },
    {
      text: "Product Feedback Inquery",
      handler: props.actionProvider.productFeedback,
      id: 3,
    },
  ];
  const buttonMarkup = businessType.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonMarkup}</div>;
};

export default FeedbackBusinessType;
