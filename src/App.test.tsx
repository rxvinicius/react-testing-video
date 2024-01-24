import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => x + y;

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<App />);
    screen.getByText("Hello world!");
  });

  it("should change message on button click", () => {
    render(<App />);
    // getByText -> gives an error if don't find the text
    // queryByText -> dosen't gives an error if don't find the text
    const { getByText, queryByText } = screen;

    const initialMessage = "Let's learn more about testing in React";
    getByText(initialMessage);

    const button = getByText(/change message/i);
    fireEvent.click(button);
    getByText(/new message!/i);

    // two ways to verify is the oldMessage is in the page or not
    expect(queryByText(initialMessage)).toBeNull(); // first one (my favorite)
    // expect(queryByText(initialMessage)).not.toBeInTheDocument(); // second onde
  });
});

export default {};
