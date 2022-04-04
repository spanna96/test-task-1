import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import chat from "../../mockdata/chat";

import Chat from "./index";

describe("Chat", () => {
  it("render current messages", () => {
    render(
      <Chat
        messages={chat.messages}
        avatar={chat.avatar}
        userName={chat.userName}
      />
    );

    chat.messages.forEach((message) => {
      expect(screen.getByText(message.text)).toBeInTheDocument();
    });
  });
});
