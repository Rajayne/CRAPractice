import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

test("button increments coutner", () => {
  const { getByText } = render(<Clicker />);
  const counter = screen.getByText(`count is`, { exact: false });
  expect(counter).toHaveTextContent("0");
  const addBtn = screen.getByText("Add!");
  fireEvent.click(addBtn);
  expect(counter).toHaveTextContent("1");
  const subBtn = screen.getByText("Subtract!");
  fireEvent.click(subBtn);
  expect(counter).toHaveTextContent("0");
});
