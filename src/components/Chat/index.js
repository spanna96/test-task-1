import React, { useRef, useEffect } from "react";

import { getFomattedDate } from "../../helpers";

import "./Chat.css";

const Chat = ({ messages, avatar, userName }) => {
  const containerRef = useRef(null);
  let lastUserMsgId = -1;

  for (let index = messages.length - 1; index >= 0; index--) {
    if (!messages[index].own) {
      lastUserMsgId = index;
      break;
    }
  }

  useEffect(() => {
    if (containerRef && containerRef.current)
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat" ref={containerRef}>
      <div className="chat__container">
        {messages.map((message, i) => {
          return (
            <div
              key={message.date + message.text + i}
              className={`chat__container__message${
                message.own ? "--own" : "--outside"
              }`}
            >
              <span className="chat__container__message__text">
                {message.text}
              </span>

              <span className="chat__container__message__date">
                {getFomattedDate(message.date)}
              </span>

              {lastUserMsgId === i ? (
                <img
                  src={avatar}
                  alt={userName}
                  className="chat__container__message__avatar"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
