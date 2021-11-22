import React from "react";
import { render } from "@testing-library/react";

import { ToggleSwitch } from "../src";

describe("ToggleSwitch", () => {
  test("renders the ToggleSwitch: Enabled", () => {
    render(<ToggleSwitch
      enabled={false}
      onChange={() => {}}
    />);
  });

  test("renders the ToggleSwitch: Disabled", () => {
    render(<ToggleSwitch
      enabled={true}
      onChange={() => {}}
    />);
  });
});