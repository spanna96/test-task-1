import React from "react";

import { getRandomMessage } from "../../mockdata/randomMessages";

import "./Input.css";

const Input = ({ text, setText, setMessages }) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter" && text.trim()) {
      onSendMessage();
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSendMessage = () => {
    const now = new Date();
    const date = Date.parse(now);
    setMessages((prev) => [...prev, { text, date, own: true }]);
    setText("");

    setTimeout(() => {
      setMessages((state) => [
        ...state,
        { text: getRandomMessage(), date: date + 3e3 },
      ]);
    }, 3e3);
  };

  return (
    <div className="footer">
      <input
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChangeHandler}
        placeholder="Type a message"
      />
      {text.trim() && (
        <button onClick={onSendMessage} className="footer__button">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/340/340913.svg"
            alt="confirm-button"
          ></img>
        </button>
      )}
    </div>
  );
};

export default Input;
