import React from "react";
import { render } from "@testing-library/react";
import ShoppingCart from "./cart";
import items from "./items";

test("renders without crashing", () => {
  render(<ShoppingCart items={items} />);
});
