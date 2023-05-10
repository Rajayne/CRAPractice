import React from "react";
import { render, screen } from "@testing-library/react";
import { Clicker } from "./clicker";

test("renders without crashing", () => {
  render(<Clicker />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<Clicker />);
  expect(asFragment()).toMatchSnapshot();
});

test("query getByText", () => {
  const { getByText } = render(<Clicker />);
  console.log(screen.getByText(`count`, { exact: false }));
});
