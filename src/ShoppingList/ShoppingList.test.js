import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

test("renders without crashing", function () {
  render(<ShoppingList />);
});

test("matches snapshot", function () {
  const { asFragment } = render(<ShoppingList />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add new item", function () {
  const { queryByText, getByLabelText } = render(<ShoppingList />);
  const input = getByLabelText("Product:");
  const btn = queryByText("Add Item");
  expect(queryByText("Product Name: Chocolate Milk")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Chocolate Milk" } });
  fireEvent.click(btn);
  expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
});
