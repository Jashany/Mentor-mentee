import React, { useState } from "react";
import "./GlobalChat.css";

const GlobalChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className={`chat-container ${isChatOpen ? "open" : "closed"}`}>
      <div className="chat-header" onClick={toggleChat}>
        <span>Global Chat</span>
        <div className="chat-icon">
          <img src="https://img.icons8.com/ios-filled/50/000000/chat.png" alt="chat-icon" />
        </div>
      </div>
      {isChatOpen && (
        <div className="chat-body">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                {msg}
              </div>
            ))}
          </div>
          <form className="chat-input" onSubmit={handleMessageSubmit}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GlobalChat;
