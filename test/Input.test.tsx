import React from "react";
import { render } from "@testing-library/react";

import { Input } from "../src";

describe("Input", () => {
  test("renders the Input: Default", () => {
    render(<Input
      state="Default"
    />);
  });

  test("renders the Input: Success", () => {
    render(<Input
      state="Success"
    />);
  });

  test("renders the Input: Warning", () => {
    render(<Input
      state="Warning"
    />);
  });

  test("renders the Input: Error", () => {
    render(<Input
      state="Error"
    />);
  });
});