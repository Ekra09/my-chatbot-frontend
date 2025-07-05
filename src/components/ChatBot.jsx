import { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const rasaURL = process.env.REACT_APP_RASA_URL || 'http://localhost:5005/webhooks/rest/webhook';

    try {
      const res = await axios.post(rasaURL, {
        sender: 'ekra_user',
        message: input,
      });
      const botResponses = res.data.map((msg) => ({ sender: 'bot', text: msg.text }));
      setMessages((prev) => [...prev, ...botResponses]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, I couldn’t reach the server.' }]);
    }

    setInput('');
  };

  return (
    <div className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">🤖 Chat with the Self-Bot</h2>
      <div className="bg-white rounded-2xl shadow-md max-w-3xl mx-auto p-6">
        <div className="h-64 overflow-y-auto mb-4 border rounded-lg p-4 text-left bg-gray-100">
          {messages.map((msg, i) => (
            <div key={i} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
              <span
                className={`inline-block p-2 my-1 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          type="text"
          placeholder="Type a message..."
          className="w-full px-4 py-2 border rounded-xl"
        />
      </div>
    </div>
  );
};

export default ChatBot;
