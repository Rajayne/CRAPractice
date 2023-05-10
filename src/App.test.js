import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import items from "./items";

test("renders without crashing", () => {
  render(<App items={items} username="Raja" />);
});
