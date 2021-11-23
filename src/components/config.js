import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./options/Options";
import Questions from "./solutions/Questions";
import BusinessType from "./business type/BusinessType";
import StoreScale from './feedbacks/StoreScale';
import FeedbackBusinessType from './feedbacks/FeedbackBuisnessType';
import ServiceProvidingOption from './feedbacks/ServiceProvidingOption';
import EmployeeTypeInSmall from './feedbacks/EmployeeTypeInSmall';

const config = {
    botName: "SalFix Bot",
    initialMessages: [
        createChatBotMessage("🙏 Welcome to SalFix Bot"),
        createChatBotMessage(
            "👇 To continue, Pick or type your Business Related Option Below.",
            {
              widget: "options",
            }
        ),
    ],
    widgets: [
        {
            widgetName: "employeeTypeInSmall",
            widgetFunc: (props) => <EmployeeTypeInSmall {...props} />,
        },
        {
            widgetName: "serviceProvidingOption",
            widgetFunc: (props) => <ServiceProvidingOption {...props} />,
        },
        {
            widgetName: "storeScale",
            widgetFunc: (props) => <StoreScale {...props} />,
        },
        {
            widgetName: "feedbackBusinessType",
            widgetFunc: (props) => <FeedbackBusinessType {...props} />,
        },
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: "businessType",
            widgetFunc: (props) => <BusinessType {...props} />,
        },
        {
            widgetName: "BusinessTips",
            widgetFunc: (props) => <Questions {...props} />,
            props: {
                questions: [
                    {
                        question: "Keep the big vision in sight.",
                        answer:
                        "A big vision will take you far. I put this tip first because when things go wrong on the path to your success, and they will, keeping the big vision in mind will enable you to steer your way back to a successful course. It may not always be the course you imagined, but your big vision becomes your north star, which in turn helps you navigate and orient yourself through the darkness. I believe in this so much, I even co-wrote a book on the subject with my brother. Your vision is your foundation, compass and celestial beacon, lighting the way forward.",
                        id: 1,
                    },
                    {
                        question: "Fuel your vision with perseverance.",
                        answer:
                        "What should go hand-in-hand with a big vision is the perseverance you’ll need to keep moving forward. If you’re a Game of Thrones watcher, there was a great line in a recent episode when Stannis Baratheon was being advised about the lack of wisdom in starting a battle in the snow. He responded: “We march to victory or we march to defeat, but we go forward, only forward.”Sometimes, when things get challenging on your path as an entrepreneur, you have to commit yourself to moving forward, regardless of the discomfort and fear surrounding the next steps. When you fuel your big vision with perseverance and the spirit of “only forward,” you eventually meet your success.",
                        id: 2,
                    },
                    {
                        question: "Make a plan, but be flexible.",
                        answer:
                        "You need a few sets of plans, even if each is only a few pages. A business plan, with an accompanying marketing outline, are important blueprints for success. They help you map out the major landmarks of the road ahead, define your success and break the journey into important metrics you can track your progress against. I’m not one for a giant, robust plan nobody will access, but I do advocate a more modest go-to plan that can act as your basic instruction manual and hold you accountable to specific numbers. The reason I don’t support highly detailed plans is that I believe you need the flexibility to alter the course as necessary. Sometimes, large changes to the plan will be necessary.",
                        id: 3,
                    },
                    {
                        question: "Embrace your expertise.",
                        answer:
                        "If you’re already innately good at something, or have a skillset, embrace it. Don’t try to be all things for all aspects of your business. Hire out or sign contracts with agencies for the things you can’t do, and focus on your strengths as quickly and often as possible. Don’t be a jack-of-all-trades and a master of none.",
                        id: 4,
                    },
                    {
                        question: "Don’t reinvent the wheel.",
                        answer:
                        "What is already working in other people’s business models, in your industry, in software applications and other business operations that you can emulate instead of re-create? Don’t waste your time trying to set up systems when you can simply purchase and install one, saving precious time and spending little money. I always keep my burn rate in mind and run as lean as possible. But sometimes the best decision is to take on the expense of some good systems so you don’t have to waste time and make mistakes building your own.",
                        id: 5,
                    },
                    {
                        question: "Don’t burn out.",
                        answer:
                        "This isn’t just a stale piece of advice: Your health is literally the most important thing in your life. When your body gives out, you’re done. Your heart doesn’t care how good a business you have; your circulatory system isn’t all that impressed with your money or accomplishments. . . you get the point. Personally, I try to eat really good food, get good sleep and take as much time as I can manage day by day to laugh with my kids and see my wife.",
                        id: 6,
                    },
                    {
                        question: "Leverage everything.",
                        answer:
                        "Life hacks may seem like just viral fodder on the internet, but they can teach an important mini-lesson in leverage. When you use leverage to your advantage in every aspect of your life, you go further, faster. Leverage outsourced help to streamline tasks and gain traffic time for important phone calls. Leverage down time waiting anywhere (the doctor’s office, your kid’s school, your mechanic’s waiting room, your airline flight) to get stuff done. ",
                        id: 7,
                    },
                    {
                        question: "Keep your sense of humor.",
                        answer:
                        "If you can’t laugh at yourself, you’re missing out. I was almost asleep the other night when I thought of a funny event that had happened earlier that day, and I suddenly found myself erupting with laughter so loud I woke the dog. Laughing is a good cure to diffuse stress, infuse some lightheartedness into life and get some perspective on the fact that, hey, this is only life after all -- you don’t have to take it so seriously. So, try to laugh more and stress a little less. It strengthens your emotional and mental well-being, keeps other people from getting under your skin and keeps you cool and collected, plus a lot more fun to be around.",
                        id: 8,
                    },
                ],
            },
        },
    ],
}

export default config;