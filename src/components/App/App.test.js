import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

import randomMessages from "../../mockdata/randomMessages";

import App from ".";

describe("App", () => {
  it("recieve message from user", () => {
    jest.useFakeTimers();

    const { container } = render(<App />);

    act(() => {
      jest.advanceTimersByTime(4e4);
    });

    const lastText = [
      ...container.querySelectorAll(".chat__container__message__text"),
    ].pop().innerHTML;

    const idxOfMessage = randomMessages.indexOf(lastText);

    expect(idxOfMessage).not.toBe(-1);
  });

  it("ensure new message in the document", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const getNewElement = (value) => screen.getByText(value);

    fireEvent.change(input, { target: { value: "some text" } });
    fireEvent.click(screen.getByRole("button"));
    expect(getNewElement("some text")).toBeInTheDocument();
  });
});
