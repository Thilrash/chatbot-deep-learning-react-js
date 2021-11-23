import React from "react";

const Options = (props) => {
    const options = [
        {
            text: "Business Idea",
            handler: props.actionProvider.handleIdea,
            id: 1,
        },
        {
            text: "SWOT Analyse & Feedbacks",
            handler: props.actionProvider.handleFeedBacks,
            id: 2,
        },
        {
            text: "Business Tips",
            handler: props.actionProvider.handleBusinessTips,
            id: 3,
        },
        { 
            text: "Help", 
            handler: props.actionProvider.handleHelp, 
            id: 4 
        },
    ];

    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">{option.text}</button>
    ));

    return <div className="option-container">{buttonMarkup}</div>
}

export default Options;