import React, { useState } from "react";

import Header from "../Header";
import Chat from "../Chat";
import Input from "../Input";

import chat from "../../mockdata/chat";

import "./App.css";

const App = () => {
  const initialMessages = chat.messages;
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(initialMessages||[]);

  return (
    <div className="app">
      <Header userName={chat.userName} avatar={chat.avatar} />
      <Chat userName={chat.userName} avatar={chat.avatar} messages={messages} />
      <Input setMessages={setMessages} text={text} setText={setText} />
    </div>
  );
};

export default App;
