import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Slider from "../components/Slider";

const setup = props => {
  const { getByTestId, container } = render(<Slider {...props} />);
  return {
    container,
    sliderInput: getByTestId(props.selector)
  };
};

const mocks = {
  minValue: 1,
  maxValue: 100,
  onChange: jest.fn(),
  currentValue: 5,
  selector: "test-selector"
};

describe("Components: Slider", () => {
  test("Renders correctly", () => {
    const { container } = setup(mocks);
    expect(container).toMatchSnapshot();
  });
  test("Should be type of range input", () => {
    const { sliderInput, container } = setup(mocks);
    expect(sliderInput.getAttribute("type")).toBe("range");
    // expect(container).toBe("range");
  });
  test("Should receive minValue from props", () => {
    const { sliderInput } = setup(mocks);
    expect(sliderInput).toHaveAttribute("min");
    // mocks.minValue.toString() is used because of default input specificity
    // It keeps and provides string value
    expect(sliderInput.getAttribute("min")).toBe(mocks.minValue.toString());
  });
  test("Should receive maxValue from props", () => {
    const { sliderInput } = setup(mocks);
    expect(sliderInput).toHaveAttribute("max");
    expect(sliderInput.getAttribute("max")).toBe(mocks.maxValue.toString());
  });
  test("Should receive currentValue from props", () => {
    const { sliderInput } = setup(mocks);
    expect(sliderInput).toHaveAttribute("value");
    expect(sliderInput).toHaveValue(mocks.currentValue.toString());
  });
  test("Should keep proper className with selector from props", () => {
    const { sliderInput } = setup(mocks);
    expect(sliderInput.className).toBe(`slider ${mocks.selector}`);
  });
  test("Should fire onChange callback when is being changed", () => {
    const { sliderInput } = setup(mocks);
    sliderInput.onchange = mocks.onChange;
    fireEvent.change(sliderInput);
    expect(mocks.onChange).toHaveBeenCalled();
  });
});
