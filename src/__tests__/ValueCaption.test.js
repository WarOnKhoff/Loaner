import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ValueCaption from "../components/ValueCaption"

const setup = props => {
  return render(<ValueCaption {...props} />)
}
const mocks = {
  caption: "Test caption",
  value: "Test Value",
  postfix: "Test postfix",
  testId: "caption_test"
}
describe("Components: ValueCaption", () => {
  test("Renders correctly", () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })
  test("Should render proper caption from props", () => {
    const { getByTestId } = setup(mocks)
    expect(getByTestId("capture_text").innerHTML).toBe(mocks.caption)
  })
  test("Should render proper value from props", () => {
    const { getByTestId } = setup(mocks)
    expect(getByTestId(mocks.testId).innerHTML).toBe(mocks.value)
  })
  test("Should render proper postfix from props", () => {
    const { getByTestId } = setup(mocks)
    expect(getByTestId("capture_postfix").innerHTML).toBe(mocks.postfix)
  })
})
