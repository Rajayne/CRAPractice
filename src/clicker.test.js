import React from "react";
import { render } from "@testing-library/react";
import { Clicker } from "./clicker";

test("renders without crashing", () => {
  render(<Clicker />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<Clicker />);
  expect(asFragment()).toMatchSnapshot();
});
