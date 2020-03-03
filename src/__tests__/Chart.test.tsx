import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Chart from "../components/Chart";

describe("Components: <Chart/>", () => {
  test("Renders correctly", () => {
    const { asFragment } = render(<Chart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
