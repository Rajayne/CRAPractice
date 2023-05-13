import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NumberGame from "./NumberGame";

test("renders without crashing", () => {
  render(<NumberGame />);
});

test("query getByText", () => {
  const { getByText } = render(<NumberGame />);
  console.log(screen.getByText(`target number`, { exact: false }));
  expect(screen.getByText(`your guess`, { exact: false })).toHaveClass(
    "loser" || "winner"
  );
  const restart = screen.getByText(`Restart!`);
  expect(restart).toBeInTheDocument();
});

test("should click", () => {
  const { getByText } = render(<NumberGame />);
  fireEvent.click(screen.getByText(`Restart!`));
});
