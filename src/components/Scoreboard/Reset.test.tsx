import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reset from "./Reset";

describe("Testing the reset button", () => {
  test("render element with default value", () => {
    render(<Reset onReset={() => null} />);
    screen.debug();
    expect(screen.getByText("😁")).toBeInTheDocument();
  });
  test("onReset Handler", () => {
    const onReset = jest.fn();
    render(<Reset onReset={onReset} />);
    fireEvent.click(screen.getByText("😁"));
    expect(onReset).toBeCalled();
  });
  test("OnMouseDown Event Handler", () => {
    render(<Reset onReset={() => null} />);
    fireEvent.mouseDown(screen.getByText("😁"));
    expect(screen.getByText("😇")).toBeInTheDocument();
  });
  test("OnMouseUp Event Handler", () => {
    render(<Reset onReset={() => null} />);
    fireEvent.mouseUp(screen.getByText("😁"));
    expect(screen.getByText("😁")).toBeInTheDocument();
  });
  test("Reset Button mouseLeave event", () => {
    render(<Reset onReset={() => null} />);
    fireEvent.mouseLeave(screen.getByText("😁"));
    expect(screen.getByText("😇")).toBeInTheDocument();
  });
});
