import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './components/ActionProvider';
import config from './components/config';
import MessageParser from './components/MessageParser';

function ChatBotContainer() {
    return (
        <div>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
    );
}

export default ChatBotContainer;