import React from 'react';
import Chatbot from 'react-chatbot-kit';

import './App.css';
import ActionProvider from './components/ActionProvider';
import config from './components/config';
import MessageParser from './components/MessageParser';

import { useState } from 'react';

import chatbotIconImage from './image/chat.png';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div className="ChatbotButton" onClick = {() => {
        setShow(!show);
      }}>
        <img src={chatbotIconImage} alt="chatbot-btn" />
      </div>        
      <div style={{ maxWidth: "400px" }}>
        {show && <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>}
      </div> 
    </div>
  );
}

export default App;
